import ButtonStyles from './ButtonStyles.module.css'

const Button: React.FC = () => {
    return (
        <button type="submit" className={`${ButtonStyles['button']}`}>
            Track
        </button>
    )
}

export default Button

