import styles from './home.module.scss';
import Helmet from 'react-helmet';
import { loadData } from '../../services/api';
import { useEffect, useState } from 'react';
// import { teams } from "../../assets/teams-logo";
import { teamsData } from '../../assets/teams-logoo';
export const Home = () => {
  const [games, setGames] = useState([]);
  // const [teamsLogo, setTeamsLogo] = useState([])
  const teams = teamsData();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const gamesData = await loadData(
          '/games/live/',
        );

        setGames(gamesData);
      } catch (error) {
        console.error(
          'Error loading teams:',
          error,
        );
      }
    };

    fetchData();
  }, []);

  const loadTeamLogo = (teamName) => {
    for (const team of teams) {
      if (teamName === team.name) {
        return team.picture_path;
      }
    }
    return null;
  };

  return (
    <>
      <Helmet>
        <title>NBA - Home</title>
      </Helmet>
      <div className={styles.homeBody}>
        <div className={styles.dashboard}>
          <h1>Games In Live</h1>

          {games.length > 0 ? (
            <div className={styles.games}>
              {games.map((game, index) => (
                <div
                  key={index}
                  className={styles.gameInfo}
                >
                  <div
                    className={styles.teamInfo}
                  >
                    <img
                      src={loadTeamLogo(
                        game.teams.home.nickname,
                      )}
                      alt="Home Team Logo"
                    />
                    <span>
                      {game.teams.home.nickname}
                    </span>
                    <strong>
                      {game.scores.home.points}
                    </strong>
                  </div>
                  <div
                    className={styles.teamInfo}
                  >
                    <img
                      src={loadTeamLogo(
                        game.teams.visitors
                          .nickname,
                      )}
                      alt="Home Team Logo"
                      width="100px"
                    />
                    <span>
                      {
                        game.teams.visitors
                          .nickname
                      }
                    </span>
                    <strong>
                      {
                        game.scores.visitors
                          .points
                      }
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h1>Não há jogos</h1>
          )}
        </div>
      </div>
    </>
  );
};
