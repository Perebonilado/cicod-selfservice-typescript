import MessageTextFieldStyles from './MessageTextFieldStyles.module.css'
import Button from '../Button'
import { useRef, useState } from 'react'

const MessageTextField: React.FC = () => {
    
    const inputRef = useRef<HTMLInputElement>(null)
    const [ fileName, setFileName ] = useState<string>('')

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        inputRef.current?.click()
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
            const fileUploaded: any = e.currentTarget.files
            const name: string  = fileUploaded[0].name
            setFileName(name)
    }

    return (
        <form className={`${MessageTextFieldStyles['form']}`}>

            <div>
                <p>Reply</p>
                <p>Close</p>
            </div>

            <textarea name="" id=""></textarea>

            <div className={`${MessageTextFieldStyles['buttons_container']}`}>
            
            <Button buttonType='solid'>
                Send
            </Button>

            <button onClick={(e)=>handleClick(e)}>
                Attach file
            </button>

            <p>{fileName}</p>

            <input type="file" onChange={(e)=>handleChange(e)} ref={inputRef} style={{display: 'none'}} />

            </div>

        </form>
        )
}

export default MessageTextField