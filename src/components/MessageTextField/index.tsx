import MessageTextFieldStyles from './MessageTextFieldStyles.module.css'
import Button from '../Button'
import { useRef, useState } from 'react'
import { AppContext, AppContent } from '../../AppContext'
import * as React from 'react'


interface Props {
    isTextField?: boolean,
    setIsTextField?: React.Dispatch<React.SetStateAction<boolean>>
}


const MessageTextField: React.FC<Props> = ({isTextField, setIsTextField}) => {

    const {Messages, setMessages} = React.useContext(AppContext) as AppContent
    
    const inputRef = useRef<HTMLInputElement>(null)
    const [ fileName, setFileName ] = useState<string>('')
    const [isFileName, setIsFileName] = useState<boolean>(false)
    const [textAreaValue, setTextAreaValue] = useState<string>('')
    
    

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        inputRef.current?.click()
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
            const fileUploaded: any = e.currentTarget.files
            const name: string  = fileUploaded[0].name

            if(name){
            setFileName(name)
            setIsFileName(!isFileName)
            }
    }

    const handleDelete = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
            setFileName('')
            setIsFileName(!isFileName)
    }


    const handleValueChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
            setTextAreaValue(e.target.value)
    }

    const handleSendMessage = () =>{
        
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const days = ["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

        const year:string = new Date().getFullYear().toString()
        const date:string = new Date().getUTCDate().toString()
        const month:string = months[new Date().getMonth()]
        const day:string = days[new Date().getDay()].toString()
        let hours:string = new Date().getHours().toString()
        parseInt(hours) < 10 ? hours =`0${hours}` : hours = `${hours}`
        let minutes = new Date().getMinutes().toString()
        parseInt(minutes) < 10 ? minutes =`0${minutes}` : minutes = `${minutes}`
        let seconds = new Date().getSeconds().toString()
        parseInt(seconds) < 10 ? seconds =`0${seconds}` : seconds = `${seconds}`

        
       const newMessage = { id: new Date().getTime(), date: `${day} ${month} ${date}, ${year}`, time: `${hours}:${minutes}:${seconds}`, message: textAreaValue, documentName: fileName, isAttach: isFileName, isReply: false}
       if (Messages && setMessages && textAreaValue) {
           setMessages([...Messages, newMessage])
           setTextAreaValue('')
           setFileName('')
       }
    }

    return (
        <form 
        className={`${MessageTextFieldStyles['form']}`}>

            <div>
                <p>Reply</p>
                <p onClick={()=>{
                    if(setIsTextField){
                        setIsTextField(!isTextField)
                    }
                }}>Close</p>
            </div>

            <textarea value={textAreaValue} onChange={handleValueChange} name="" id=""></textarea>

            <div className={`${MessageTextFieldStyles['buttons_container']}`}>
            
            <div className={`${MessageTextFieldStyles['button_component']}`}>
            <Button
             buttonType='solid'
             textAreaValue={textAreaValue}
             setTextAreaValue={setTextAreaValue}
             handleSendMessage={handleSendMessage}
             >
                Send
            </Button>
            </div>

    
                
            <a href='#' className={`${MessageTextFieldStyles['attach_button']}`} onClick={handleClick}>
                <img 
                src="https://res.cloudinary.com/dt0wfaxft/image/upload/v1641987482/Group_7894_rquput.svg" 
                alt="attach_icon" />
                Attach file
            </a>
            


            <div
            className={`${MessageTextFieldStyles['file_name_box']}`}
            >{fileName}
            {fileName && <img 
                onClick={handleDelete}
                src="https://res.cloudinary.com/dt0wfaxft/image/upload/v1641997779/Path_4059_axlmhy.svg" 
                alt="delete_icon" />}
            </div>

            <input type="file" onChange={handleChange} ref={inputRef} style={{display: 'none'}} />

            </div>

        </form>
        )
}

export default MessageTextField