
import styles from './styles.module.scss'
import { Helmet } from 'react-helmet'
export const Statistics = () => {
    return (
        <>
        <Helmet>
                <title>NBA - Statistics</title>
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