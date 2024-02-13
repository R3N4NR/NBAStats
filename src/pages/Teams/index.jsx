import { SideBar } from '../../components/SideBar'
import styles from './styles.module.scss'
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react'
import { loadData } from '../../services/api.js'
import { Link } from 'react-router-dom'

export const Teams = () => {
    const [fade, setFade] = useState(false);

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const teamsData = await loadData("/teams");
                setTeams(teamsData.response);
            } catch (error) {
                console.error("Error loading teams:", error);
            }
        };
        fetchData();
    }, []);


    useEffect(() => {
        function handleScroll() {
            const scrollPosition = window.scrollY;
            const startFade = 100;

            if (scrollPosition > startFade) {
                setFade(true);
            } else {
                setFade(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Helmet>
                <title>NBA - Teams</title>
            </Helmet>
            <SideBar />
            <div className={`${styles.teamsBody} ${fade ? styles.fadeOut : ''}`}>
                <h1>Teams</h1>
                <div className={styles.teamsBoard}>
                    
                    {teams && teams.length > 0 && teams.map((item, index) => (
                       item.nbaFranchise && (
                        <Link to={`/teams/${item.id}`}>
                       <div key={index} className={styles.team}>
                            <img src={item.logo} alt="Team Logo"  />
                            <strong>{item.name}</strong>
                        </div>
                        </Link>
                        )
                        
                    )) }
                    
                </div>
            </div>
        </>
    )
}
