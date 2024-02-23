import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadData } from '../../../services/api';
import { Helmet } from 'react-helmet';
import styles from './index.module.scss';
import { PlayersTable } from '../../../components/PlayersTable';
import Loading from '../../../assets/loading-image.gif';
import Dropdown from '../../../components/DropDown/DropDown';
import { StatsTable } from '../../../components/StatsTable/StatsTable';
export const TeamPage = ({ route }) => {
  const { id } = useParams();

  const [teamDetails, setTeamDetails] = useState(
    {},
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageTitle, setPageTitle] = useState('');
  const [season, setSeason] = useState('');
  const [statistics, setStatistics] = useState(
    [],
  );

  useEffect(() => {
    const fetchData = async () => {
      let ano = new Date();
      let anoAtual = (
        ano.getFullYear() - 1
      ).toString();
      setSeason(anoAtual);
      try {
        if (route === 'players') {
          const teamPlayersData = await loadData(
            `/players?team=${parseInt(id)}&season=${anoAtual}`,
          );
          const teamData = await loadData(
            `/teams?id=${parseInt(id)}`,
          );

          setTeamDetails({
            players: teamPlayersData.response,
            team: teamData.response,
          });
          setPageTitle(teamData.response[0].name);
        } else if (route === 'statistics') {
          const teamStatisticsData =
            await loadData(
              `/teams/statistics?id=${parseInt(id)}&season=${2020}`,
            );
          const teamData = await await loadData(
            `/teams?id=${parseInt(id)}`,
          );
          setStatistics(teamStatisticsData);
          setPageTitle(teamData.response[0].name);
          console.log(statistics);
        }

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, route]);

  console.log(route);
  console.log(statistics);

  return (
    <>
      <Helmet>
        <title>{`NBA - ${pageTitle}`}</title>
      </Helmet>
      <div className={styles.teamBody}>
        {loading ? (
          <img src={Loading} alt="loading.gif" />
        ) : (
          <div className={styles.teamBoard}>
            {route === 'players'
              ? teamDetails.players && (
                  <PlayersTable
                    players={teamDetails.players}
                  />
                )
              : route === 'statistics' && (
                  <>
                    <div
                      className={styles.dropdown}
                    >
                      <Dropdown />
                    </div>

                    <StatsTable />
                  </>
                )}
          </div>
        )}
      </div>
    </>
  );
};
