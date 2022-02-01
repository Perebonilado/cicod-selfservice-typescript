import MessagesContainerStyles from './MessagesContainerStyles.module.css'
import MessageBox from '../MessageBox'

type MessageTemplate = {
    id: number,
    name?: string,
    date: string,
    time: string,
    isReply?:boolean,
    isAttach?: boolean,
    documentName?: string,
    message: string
}[]

const Messages:MessageTemplate = [
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


const MessagesContainer = () => {
    return (
        <div className={`${MessagesContainerStyles['container']}`}>
            {Messages.map((respondent)=>{
                
                const {name, date, time, message, documentName, isAttach, isReply, id } = respondent

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