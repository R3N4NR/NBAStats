import styles from './styles.module.scss'
import { Helmet } from 'react-helmet'
export const Players = () => {
    return (
        <>
        <Helmet>
                <title>NBA - Players</title>
            </Helmet>
            
            <div className={styles.playersBody}>
                <h1>Teams</h1>
                <div className={styles.playersBoard}>
                    
                    
                        <div className={styles.team}>
                            <img src="#" alt="Team Logo" />
                            <strong>CORPO IGUAL A PÁGINA DE TIMES</strong>
                        </div>
                    
                    
                </div>
            </div>
        </>
    )
}