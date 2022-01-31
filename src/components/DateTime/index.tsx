import React from "react"
import DateTimeStyles from './DateTimeStyles.module.css'

interface Props {
    date: string,
    time: string
}

const DateTime: React.FC<Props> = ({date, time}) => {
    return (
        <p className={`${DateTimeStyles['container']}`}>
        {date}:{time}
        </p>
    )
}

export default DateTime