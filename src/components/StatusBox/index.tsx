import React from "react"
import StatusBoxStyles from './StatusBoxStyles.module.css'

interface Props {
    status: string
}

const StatusBox: React.FC<Props> = ({status}) => {
    return (
        <p className={`${StatusBoxStyles['container']}`}>
            {status}
        </p>
    )
}

export default StatusBox