import MessagesContainerStyles from './MessagesContainerStyles.module.css'
import MessageBox from '../MessageBox'
import useFetch from '../../useFetch'
import {MessageTemplate} from '../../MessageTemplate'
import { AppContext, AppContent } from '../../AppContext'
import * as React from 'react'



const MessagesContainer = () => {
    
    const {Messages} = React.useContext(AppContext) as AppContent

    return (
        <div className={`${MessagesContainerStyles['container']}`}>
            
    { Messages && Messages.map((response)=>{
                
               const {name, date, time, message, documentName, isAttach, isReply, id } = response

                return (
                    <MessageBox
                    key={id} 
                    name={name} 
                    message={message} 
                    date={date} 
                    time={time} 
                    documentName={documentName}
                    isAttach={isAttach}
                    isReply={isReply}
                     />
                )
            })}
        </div>
    )
}

export default MessagesContainer