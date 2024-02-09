import styles from './sidebar.module.scss';
import { teams } from '../../assets/teams-logo';

export const SideBar = () => {

    return (
       
        <div className={styles.container}>
            <div className={styles.games}>
                
                {
                    teams.map(team =>
                        <div className={styles.gameInfo}> 
                        <div className={styles.team}>
                            <strong>109</strong>
                        <span>
                            {team.name}
                        </span>
                        </div>
                        <span>X</span>
                        <div className={styles.team}>
                            <strong>109</strong>
                        <span>
                            {team.name}
                        </span>
                        </div>
                        </div>
                        )
                }
                
            </div>
        </div>
    )
}