import React, { useState } from 'react'
import { MessageTemplate } from './MessageTemplate'
import { OrderTemplate } from './OrderTemplate'

export type AppContent = {
    Messages?: MessageTemplate[],
    setMessages?: React.Dispatch<React.SetStateAction<MessageTemplate[]>>,
    orderDetails: OrderTemplate,
    setOrderDetails: React.Dispatch<React.SetStateAction<OrderTemplate>>,
    isOrderDetails: boolean,
    setIsOrderDetails: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = React.createContext<AppContent | null>(null)

export const AppProvider: React.FC = ({children}) => {

    const messages:MessageTemplate[] = [
        {
    id: 1,
    name: 'James Oluwaseun', 
    date: 'Thursday Jul 16, 2021', 
    time: '14:04:15',
    isReply: true,
    isAttach: true,
    documentName: 'Document 1',
    message: 'Lorem ipsum dummy text of the printing and typesetting industry. Lorem ipsum has the industry'
    },
    
    { 
    id: 2,
    date: 'Thursday Jul 16, 2021', 
    time: '14:04:15',
    isReply: false,
    isAttach: false,
    message: 'Lorem ipsum dummy text of the printing and typesetting industry. Lorem ipsum has the industry'
    }
    ]

    const order:OrderTemplate =
        {
        customerName: 'Johnson Drake',
        phone: '092342345',
        customerEmail: 'johnson_drake@gmail.com',
        address: 'No 7, Left front road, victoria island Lagos',
        orderChannel: 'CICOD',
        orderStatus: 'PAID',
        paymentMode: 'Online',
        paymentStatus: 'PAID',
        paymentDueDate: '',
        deliveryType: 'Delivery',
        deliveryAddress: 'Same as custimer address'
    }

    const [Messages, setMessages] = useState<MessageTemplate[]>(messages)
    const [orderDetails, setOrderDetails] = useState<OrderTemplate>(order)
    const [isOrderDetails, setIsOrderDetails] = useState<boolean>(true)


    return (
        <AppContext.Provider value={{Messages, setMessages, orderDetails, setOrderDetails, isOrderDetails, setIsOrderDetails}}>
            {children}
        </AppContext.Provider>
    )
}