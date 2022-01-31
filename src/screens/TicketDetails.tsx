import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import IdHeading from "../components/IdHeading"
import ConversationContainer from "../components/ConversationContainer"
import TicketDetailsStyles from './TicketDetailsStyles.module.css'

const TicketDetails: React.FC = () => {
    return (
        <>
        <NavBar businessName="Business Name" />
        <section className={`${TicketDetailsStyles['container']}`}>
        <IdHeading id={1004981}/>
        <ConversationContainer />
        </section>
        <Footer />
        </>
    )
}

export default TicketDetails
            