import ConversationContainerStyles from './ConversationContainerStyles.module.css'
import StatusBox from '../StatusBox'
import CommentBox from '../CommentsBox'
import DateTime from '../DateTime'
import Button from '../Button'
import MessagesContainer from '../MessagesContainer'
import MessageTextField from '../MessageTextField'

const ConversationContainer:React.FC = () => {
    return (
        <section className={`${ConversationContainerStyles['container']}`}>
            <div className={`${ConversationContainerStyles['headingBox']}`}>
                <p>
                    Here is the information about your order
                </p>

                <p>
                    Engage with us in the comment section
                </p>
            </div>

            <div className={`${ConversationContainerStyles['currentStatusBox']}`}>
                <h3>Current Status</h3>

                <div className={`${ConversationContainerStyles['sub_box']}`}>

                    <div className={`${ConversationContainerStyles['status']}`}>
                        <p>Status</p>
                        <StatusBox status='PAID'/>
                    </div>

                    <div className={`${ConversationContainerStyles['date_time']}`}>
                        <p>Date & Time</p>
                        <DateTime date='20-12-18' time='3:00'/>
                    </div>

                    <div className={`${ConversationContainerStyles['comment']}`}>
                        <p>Comments</p>
                        <CommentBox comment='
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Placeat, quas veniam ipsam libero, 
                        assumenda animi modi consequatur id 
                        laborum error quibusdam nemo, esse 
                        quidem a obcaecati ratione iusto 
                        sed ea.'/>
                    </div>

                </div>


            <div className={`${ConversationContainerStyles['reply_box']}`}><img src="" alt="" /><Button buttonType='link'>Reply</Button></div>

            <MessagesContainer />
            <MessageTextField />
            </div>



        </section>
    )
}

export default ConversationContainer