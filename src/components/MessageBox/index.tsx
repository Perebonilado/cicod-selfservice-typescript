import MessageBoxStyles from './MessageBoxStyles.module.css'

interface Props {
    name?: string,
    date?: string,
    time?: string,
    isReply?:boolean,
    isAttach?: boolean,
    documentName?: string,
    message: string
}

const MessageBox:React.FC<Props> = ({
    name,
    date,
    time,
    isReply,
    isAttach,
    documentName, 
    message
}) => {
    return (
        <div className={`${isReply && MessageBoxStyles['replyBox']} ${MessageBoxStyles['message_box']}`}> 
        <div className={
            `${MessageBoxStyles['container']}`}
            >
            <div className={`${MessageBoxStyles['titleBox']}`}>
                <p>By {name || 'Me'}</p>
                <div className={`${MessageBoxStyles['circle']}`}></div>
                <p>{time}, {date}</p>
            </div>
            <p>{message}</p>
            {isAttach && 
                <div className={`${MessageBoxStyles['attachment_box']}`}>
                    <p>Attachments</p>
                    <p>{documentName}</p>
                </div>}
        </div>
        </div>
    )
}

export default MessageBox