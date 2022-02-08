import IdHeadingStyles from './IdHeadingStyles.module.css'
import InputField from '../InputField'
import Button from '../Button'
import { FormEvent, useState } from 'react'

interface Props {
    id: number
}

const IdHeading: React.FC<Props> = ({id}) => {

    const [inputVal, setInputVal] = useState<string>('')
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(inputVal)
        setInputVal('')
    }

    return (
        <section className={`${IdHeadingStyles['container']}`}>
            <h2>
            ORDER ID: {id}
            </h2>

            <form action="" onSubmit={handleSubmit}>
            <label>Ticket/order ID</label>

            <div className={`${IdHeadingStyles['input_button_container']}`}>
            <div className={`${IdHeadingStyles['input_container']}`}>
            <InputField inputVal={inputVal} setInputVal={setInputVal} />
            </div>

           
            <Button />
            </div>
           


            </form>
            
        </section>
    )
}

export default IdHeading


