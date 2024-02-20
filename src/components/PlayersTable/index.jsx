import styles from './index.module.scss'
import { calcularIdade } from '../../utils/dateFormatter'
export const PlayersTable = ( {players} ) => {
    console.log(players)
    return (
        <>
        <div className={styles.sectionHeader}>
            <div className={styles.column}>
                Nome
            </div>
            <div className={styles.column}>
                Idade
            </div>
            <div className={styles.column}>
                Altura
            </div>
            <div className={styles.column}>
                Peso
            </div>
            <div className={styles.column}>
                College
            </div>
        </div>

        <div className={styles.sectionBody}>
            {
              players &&  players.map((item, index) => 
                    <div key={index} className={styles.sectionContent}>
                        <div className={styles.column}>
                            {`${item.firstname} ${item.lastname}`}
                        </div>
                        <div className={styles.column}>
                            {calcularIdade(item.birth.date)}
                        </div>
                        <div className={styles.column}>
                            {item.height.meters}
                        </div>
                        <div className={styles.column}>
                            {item.weight.kilograms}
                        </div>
                        <div className={styles.column}>
                            {item.college}
                        </div>
                    </div>
                )
            }
        </div>
        </>
    )
} 
