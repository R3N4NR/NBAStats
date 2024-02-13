import styles from './styles.module.scss'
import { Brackets } from '../../../components/Brackets/Brackets'
export const SeasonGames = () => {

    return(
        <>
        <div className={styles.gameSeasonBody}>
            <div className={styles.gamesSeasonBoard}>
            <div className={styles.gamesHeader}>
                <input placeholder="Digite um jogo para buscar" type='text'/>
                
                </div>

            <div className={styles.showGames}>
                <span>TESTE</span>
            </div>
                
            </div>
            
        </div>
        
       
        </>
    )
}