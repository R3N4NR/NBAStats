import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Helmet } from 'react-helmet'
import { loadData } from '../../../services/api'
import { SearchBar } from '../../../components/SearchBar/SearchBar'
import { Button } from '../../../components/Button/Button'
import { PlayersTable } from '../../../components/PlayersTable'
export const Players = () => {

    const [loading, setLoading] = useState(true)
    const [players, setPlayers] = useState([])
    const [search, setSearch] = useState('')

    const handleChange = (e) => {

        setSearch(e.target.value)
    
      }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = await loadData(`/players?search=${search}`)
        console.log(data.response)
        setPlayers(data.response)
    }
    return (
        <>
        <Helmet>
                <title>NBA - Players</title>
            </Helmet>
            
            <div className={styles.playersBody}>
                <h1>Players</h1>

                <div className={styles.playersBoard} >
                    <form className={styles.playersForm} onSubmit={handleSubmit}>
                    <SearchBar handleChange={handleChange} value={search} />
                    <Button type="submit" text="Buscar"/>
                    
                    </form>
                    <PlayersTable players={players}/>
                </div>
            </div>
        </>
    )
}