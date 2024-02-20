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
        
        try{
            const data = await loadData(`/players?search=${search}`)
            setPlayers(data.response)
            
        }catch(err){

        }
        
        
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
                    <SearchBar handleChange={handleChange} placeholder='Butler, Johnson, James ...' value={search} />
                    <Button type="submit" text="Buscar"/>
                    
                    </form>
                    {players.length > 0 ? (<PlayersTable players={players}/>) : '' }
                    
                </div>
            </div>
        </>
    )
}