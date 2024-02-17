import {Route,Routes, BrowserRouter} from 'react-router-dom'

import { Home } from './pages/Home'
import Header from './components/Header'
import { Teams } from './pages/Teams'
import { Players } from './pages/Players/PlayerSearch'
import { Games} from './pages/Games/Seasons'
import { Statistics } from './pages/Statistics/TeamSelect'
import { SeasonGames } from './pages/Games/SeasonGames'
import { TeamPage } from './pages/Teams/TeamPage'
const RoutesApp = () => {

    return (
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/teams/:id" element={<TeamPage />} />
            <Route path='/' element={<Home/>}/>
            <Route path='/teams' element={<Teams/>}/>
            <Route path='/players' element={<Players/>}/>
            <Route path='/games' element={<Games/>}/>
            <Route path='/statistics' element={<Statistics/>}/>
            <Route path='/seasongames' element={< SeasonGames/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;