import { SideBar } from "../../../components/SideBar"
import { Helmet } from "react-helmet"
import styles from './styles.module.scss'
import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { loadData } from "../../../services/api"
export const Games = () => {

    const [seasons, setSeasons] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            const data = await loadData('/seasons')
            console.log(data.response)
            setSeasons(data.response)
        }

        
        fetchData()

    }, [])
    return (
        <>
            <Helmet>
                <title>NBA - Games</title>
            </Helmet>
            <SideBar />
            <div className={styles.gamesBody}>
                <h1>Seasons</h1>
                <div className={styles.gamesBoard}>
                    {   
                    seasons.map((item) => 
                        <Link to={`/games/${+item}`}>
                            <div  className={styles.seasonCard}>
                                <span>{+item}</span>
                            </div>
                        </Link>
                    )
                        
                    }


                </div>
            </div>
        </>
    )
}