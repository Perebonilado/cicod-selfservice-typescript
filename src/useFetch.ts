import { useEffect, useState } from 'react'
import {MessageTemplate} from './MessageTemplate'

const useFetch = () => {
    
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
    
const [Messages, setMessages] = useState<MessageTemplate[]>(messages)
  

useEffect(()=>{

},[])

return {Messages, setMessages}

}

export default useFetch