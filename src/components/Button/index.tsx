import ButtonStyles from './ButtonStyles.module.css'

interface Props {
    buttonType?: string,
    children?: string
}


const Button: React.FC<Props> = ({buttonType, children}) => {
    


    return (
        <a href="/" type="submit" 
        className={`${ButtonStyles['button']} 
        ${buttonType === 'outline' && ButtonStyles['outline']}
        ${buttonType === 'link' && ButtonStyles['link']}
        ${buttonType === 'solid' && ButtonStyles['solid']}
        ${!buttonType && ButtonStyles['solid']}`
        }>
            {children || 'Track'}
        </a>
    )
}

export default Button

