import HomeScreen from './HomeScreen'
import TicketDetails from './TicketDetails'
import { useLocation } from 'react-router-dom'


const View:React.FC = () => {
    
    const location = useLocation()

    return (
    <>
    {location.search ? <TicketDetails /> : <HomeScreen />}
    </>)
}

export default View