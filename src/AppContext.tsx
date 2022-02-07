import React, { useState } from 'react'
import { MessageTemplate } from './MessageTemplate'
import { OrderTemplate } from './OrderTemplate'
import { StatusHistoryTemplate } from './StatusHistoryTemplate'

export type AppContent = {
    Messages?: MessageTemplate[],
    setMessages?: React.Dispatch<React.SetStateAction<MessageTemplate[]>>,
    orderDetails: OrderTemplate,
    setOrderDetails: React.Dispatch<React.SetStateAction<OrderTemplate>>,
    isOrderDetails: boolean,
    setIsOrderDetails: React.Dispatch<React.SetStateAction<boolean>>,
    statusHistoryInfo: StatusHistoryTemplate[],
    setStatusHistoryInfo?: React.Dispatch<React.SetStateAction<StatusHistoryTemplate[]>>,
    isItems: boolean,
    setIsItems: React.Dispatch<React.SetStateAction<boolean>>
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

    const StatusHistory:StatusHistoryTemplate[] = [
        {
            id: 1,
            status: 'PAID',
            dateAndTime: '20-12-18;3:00',
            comment: 'Lorem ipsum facere aut suns'
        },

        {
            id: 2,
            status: 'PAID',
            dateAndTime: '20-12-18;3:00',
            comment: 'Lorem ipsum facere aut suns'
        },

        {
            id: 3,
            status: 'PAID',
            dateAndTime: '20-12-18;3:00',
            comment: 'Lorem ipsum facere aut suns'
        },
    ]

    const [Messages, setMessages] = useState<MessageTemplate[]>(messages)
    const [orderDetails, setOrderDetails] = useState<OrderTemplate>(order)
    const [isOrderDetails, setIsOrderDetails] = useState<boolean>(true)
    const [statusHistoryInfo, setStatusHistoryInfo] = useState<StatusHistoryTemplate[]>(StatusHistory)
    const [isItems, setIsItems] = useState<boolean>(true)

    return (
        <AppContext.Provider value={{Messages, setMessages, orderDetails, setOrderDetails, isOrderDetails, setIsOrderDetails, statusHistoryInfo, isItems, setIsItems}}>
            {children}
        </AppContext.Provider>
    )
}