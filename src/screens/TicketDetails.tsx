import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import IdHeading from "../components/IdHeading"
import ConversationContainer from "../components/ConversationContainer"
import TicketDetailsStyles from './TicketDetailsStyles.module.css'
import OrderDetailsContainer from "../components/OrderDetailsContainer"
import StatusHistoryContainer from '../components/StatusHistoryContainer'
import ItemsContainer from "../components/ItemsContainer"


const TicketDetails: React.FC = () => {
    return (
        <>
        <NavBar businessName="Business Name" />
        <section className={`${TicketDetailsStyles['container']}`}>
        <IdHeading id={1004981}/>
        <ConversationContainer />
        <OrderDetailsContainer />
        <ItemsContainer />
        <StatusHistoryContainer />
        </section>
        <Footer />
        </>
    )
}

export default TicketDetails
       
            
        
        
       