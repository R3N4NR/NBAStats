import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadData } from '../../../services/api';
import { Helmet } from 'react-helmet';
import styles from './index.module.scss'
import { PlayersTable } from '../../../components/PlayersTable';
import Loading from '../../../assets/loading-image.gif'
export const TeamPage = () => {
    const { id } = useParams();

    const [teamDetails, setTeamDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pageTitle, setPageTitle] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            let ano = new Date()
            let anoAtual = ano.getFullYear().toString()
            try {
                const teamPlayersData = await loadData(`/players?team=${parseInt(id)}&season=${anoAtual}`);
                const teamData = await loadData(`/teams?id=${parseInt(id)}`);

                setTeamDetails({
                    "players": teamPlayersData.response,
                    "team": teamData.response
                });

                setPageTitle(teamData.response[0].name);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
            <Helmet>
                <title>{`NBA - ${pageTitle}`}</title>
            </Helmet>
            <div className={styles.teamBody}>
                {loading ? (
                <img src={Loading} alt="loading.gif" />
                ) 
                : (
                <div className={styles.teamBoard}>
                {teamDetails.players && <PlayersTable players={teamDetails.players} />}
                </div>
                )
                }

            </div>
        </>
    )
}
