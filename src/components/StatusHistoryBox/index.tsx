import { AppContext, AppContent } from '../../AppContext'
import * as React from 'react'
import StatusBox from '../StatusBox'
import StatusHistoryBoxStyles from './StatusHistoryBoxStyles.module.css'
import Button from '../Button'
import { useState } from 'react'
import { stat } from 'fs/promises'

const StatusHistoryBox:React.FC = () => {
    
    const {statusHistoryInfo, setStatusHistoryInfo} = React.useContext(AppContext) as AppContent

    const handleComment = (id:number) =>{
        if (setStatusHistoryInfo) {
            setStatusHistoryInfo(statusHistoryInfo.map((info)=>{
                return id === info.id ? {...info, isComment: !info.isComment} : info
            }))
        }
        
    }

    return (
        <ul className={`${StatusHistoryBoxStyles['container']} ${statusHistoryInfo.length > 1 && StatusHistoryBoxStyles['multiple']}`}>
            
            {statusHistoryInfo.map((info)=>{
                
                const { id, status, dateAndTime, comment, isComment} = info

                return (
                    <li key={id}>
                <div className={`${StatusHistoryBoxStyles['success_icon_box']}`}>
                <img src="https://res.cloudinary.com/dt0wfaxft/image/upload/v1641983339/Icon_ionic-md-checkmark-circle_sdwlpv.svg" alt="" />
                </div>

                <div>

                    <div className={`${StatusHistoryBoxStyles['item1']}`}>
                    <h4>Status</h4>
                    <StatusBox status={status}/>
                    </div>

                    <div className={`${StatusHistoryBoxStyles['item2']}`}>
                        <h4>Date & Time</h4>
                        <p>{dateAndTime}</p>
                    </div>

                    <div className={`${StatusHistoryBoxStyles['item3']}`}>
                        <div>
                            <h4>Comment</h4>
                            <div onClick={()=>handleComment(id)}>{isComment ? <Button buttonType='link'>Hide</Button> : <Button buttonType='link'>Show</Button>}</div>
                        </div>
                        <p>{isComment && comment}</p>
                    </div>

                </div>
            </li>
                )
            })}

        </ul>
    )
}

export default StatusHistoryBox