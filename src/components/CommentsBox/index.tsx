import React from 'react'
import CommentBoxStyles from './CommentBoxStyles.module.css'

interface Props {
    comment: string
}

const CommentBox: React.FC<Props> = ({comment}) => {
    return (
        <p className={`${CommentBoxStyles['container']}`}>
        {comment}
        </p>
    )
}

export default CommentBox