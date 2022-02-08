import IdHeadingStyles from './IdHeadingStyles.module.css'
import InputField from '../InputField'
import Button from '../Button'
import { useSearchParams } from 'react-router-dom'
import { AppContext, AppContent } from '../../AppContext'
import * as React from 'react'


interface Props {
    id: number
}

const IdHeading: React.FC<Props> = ({id}) => {

    const {inputVal, setInputVal} = React.useContext(AppContext) as AppContent
    const [searchParams, setSearchParams] = useSearchParams()
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputVal) {
            setSearchParams({id: inputVal})
        }
        setInputVal('')
    }

    const handleTrack = () => {
        if (inputVal) {
            setSearchParams({id: inputVal})
        }
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

           
            <Button handleTrack={handleTrack}/>
            </div>
           


            </form>
            
        </section>
    )
}

export default IdHeading


