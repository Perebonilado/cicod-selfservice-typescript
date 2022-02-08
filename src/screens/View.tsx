import HomeScreen from './HomeScreen'
import TicketDetails from './TicketDetails'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { AppContext, AppContent } from '../AppContext'
import * as React from 'react'


const View:React.FC = () => {
    
    const {inputVal, setInputVal} = React.useContext(AppContext) as AppContent
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    const navigate = useNavigate()

    const query = window.location.search.slice(4, window.location.search.length + 1)

    return (
    <>
    {location.search ? <TicketDetails /> : <HomeScreen />}
    </>)
}

export default View