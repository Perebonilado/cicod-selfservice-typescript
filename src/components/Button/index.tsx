import ButtonStyles from './ButtonStyles.module.css'
import * as React from 'react'


interface Props {
    buttonType?: string,
    children?: string,
    isTextField?: boolean,
    setIsTextField?: React.Dispatch<React.SetStateAction<boolean>>,
    textAreaValue?: string,
    setTextAreaValue?: React.Dispatch<React.SetStateAction<string>> | undefined, 
    handleSendMessage?: ()=>void
}


const Button: React.FC<Props> = ({
    handleSendMessage, 
    buttonType, 
    children, 
    isTextField, 
    setIsTextField,
    setTextAreaValue}) => {

       
    
    return (
        <a href="/" type="submit" 
        className={`${ButtonStyles['button']} 
        ${buttonType === 'outline' && ButtonStyles['outline']}
        ${buttonType === 'link' && ButtonStyles['link']}
        ${buttonType === 'solid' && ButtonStyles['solid']}
        ${!buttonType && ButtonStyles['solid']}`
        }
        onClick={(e)=>{
            e.preventDefault()
            if (setIsTextField) {
                setIsTextField(!isTextField)
            }

            if(handleSendMessage && setTextAreaValue){
               return handleSendMessage()
            }

        }}
        >
            {children || 'Track'}
        </a>
    )
}

export default Button

