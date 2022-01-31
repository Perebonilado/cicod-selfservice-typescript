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

            <form action="" onSubmit={(e)=>handleSubmit(e)}>
            <label>Ticket/order ID</label>
            <InputField inputVal={inputVal} setInputVal={setInputVal} />
            <Button />
            </form>
            
        </section>
    )
}

export default IdHeading
