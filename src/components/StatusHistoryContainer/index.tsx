import StatusHistoryContainerStyles from './StatusHistoryContainerStyles.module.css'
import StatusHistoryBox from '../StatusHistoryBox'

const StatusHistoryContainer:React.FC = () => {
    
    return (
        <section className={`${StatusHistoryContainerStyles['container']}`}>
            <div className={`${StatusHistoryContainerStyles['headingBox']}`}>
                <h3>Status History</h3>
                <p>If you have questions or issues with this ticket, <b>reply in the comment section in Current Status</b></p>
            </div>

            <StatusHistoryBox />
        </section>
    )
}

export default StatusHistoryContainer