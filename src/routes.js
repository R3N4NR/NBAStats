import {Route,Routes, BrowserRouter} from 'react-router-dom'

import { Home } from './pages/Home'
import Header from './components/Header'
import { Teams } from './pages/Teams'
const RoutesApp = () => {

    return (
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/teams' element={<Teams/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;