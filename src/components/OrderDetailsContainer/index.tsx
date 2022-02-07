import OrderDetailsContent from "../OrderDetailsContent"
import OrderDetailsHeading from "../OrderDetailsHeading"
import OrderDetailsContainerStyles from './OrderDetailsContainerStyles.module.css'
import { AppContext, AppContent } from '../../AppContext'
import * as React from 'react'

const OrderDetailsContainer:React.FC = () => {
    
    const {isOrderDetails, setIsOrderDetails} = React.useContext(AppContext) as AppContent

    const handleClick = () => {
        setIsOrderDetails(!isOrderDetails)
    }

    return (
        <div className={`${OrderDetailsContainerStyles['container']}`}>
            <OrderDetailsHeading handleClick={handleClick} />
            <OrderDetailsContent />
        </div>
    )
}

export default OrderDetailsContainer