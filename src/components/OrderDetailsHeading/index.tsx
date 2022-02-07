import OrderDetailsHeadingStyles from './OrderDetailsHeadingStyles.module.css'
import { AppContext, AppContent } from '../../AppContext'
import * as React from 'react'

interface Props {
    handleClick: ()=>void
}

const OrderDetailsHeading:React.FC<Props> = ({handleClick}) => {
    
    const { isOrderDetails} = React.useContext(AppContext) as AppContent

    return (
    <div onClick={handleClick} className={`${OrderDetailsHeadingStyles['container']}`}>
        <h3>Order Details</h3>
        <div>{isOrderDetails ? <i className="far fa-chevron-up"></i> : <i className="far fa-chevron-down"></i>}</div>
    </div>
    )
}

export default OrderDetailsHeading