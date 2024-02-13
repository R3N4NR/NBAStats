import { SideBar } from "../../../components/SideBar"
import { Helmet } from "react-helmet"
import styles from './styles.module.scss'
import { Link } from "react-router-dom"
export const Games = () => {
    return (
        <>
            <Helmet>
            <title>NBA - Games</title>
            </Helmet>
            <SideBar />
            <div className={styles.gamesBody}>
                <h1>Games</h1>
                <div className={styles.gamesBoard}>
                <Link to="/seasongames" element="">
                    <div className={styles.seasonCard}>
                       <span> 2020 </span>
                    </div>
                    </Link>
                    <div className={styles.seasonCard}>

                    </div>
                    <div className={styles.seasonCard}>

                    </div>
                    <div className={styles.seasonCard}>

                    </div>
                    <div className={styles.seasonCard}>

                    </div>
                    <div className={styles.seasonCard}>

                    </div>
                </div>
            </div>
        </>
    )
}