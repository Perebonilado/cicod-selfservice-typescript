import OrderDetailsContentStyles from './OrderDetailsContentStyles.module.css'
import StatusBox from '../StatusBox'
import { AppContext, AppContent } from '../../AppContext'
import * as React from 'react'

const OrderDetailsContent:React.FC = () => {
    
    const {orderDetails, isOrderDetails} = React.useContext(AppContext) as AppContent

    const {customerName, phone, customerEmail, address, orderChannel, orderStatus, paymentMode, paymentStatus, paymentDueDate, deliveryType, deliveryAddress} = orderDetails
    return (
        <>
        {isOrderDetails && <div className={`${OrderDetailsContentStyles['container']}`}>
        <div>
    <h4>Customer Name</h4>
    <p>{customerName}</p>
</div>

<div>
    <h4>Phone</h4>
    <p>{phone}</p>
</div>

<div>
    <h4>Customer Email</h4>
    <p>{customerEmail}</p>
</div>

<div>
    <h4>Address</h4>
    <p>{address}</p>
</div>

<div>
    <h4>Order Channel</h4>
    <p>{orderChannel}</p>
</div>

<div>
    <h4>Order Status</h4>
    <div><StatusBox status={orderStatus}/></div>
</div>

<div>
    <h4>Payment Mode</h4>
    <p>{paymentMode}</p>
</div>

<div>
    <h4>Payment Status</h4>
    <div><StatusBox status={paymentStatus}/></div>
</div>

<div>
    <h4>Payment Due Date</h4>
    <p>{paymentDueDate}</p>
</div>

<div>
    <h4>Delivery Type</h4>
    <p>{deliveryType}</p>
</div>

<div>
    <h4>Delivery Address</h4>
    <p>{deliveryAddress}</p>
</div>
</div>}
</>

        )

}

export default OrderDetailsContent
        
        
        
        