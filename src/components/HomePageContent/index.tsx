import HomePageContentStyles from './HomePageContentStyles.module.css'
import InputField from '../InputField'
import Button from '../Button'
import { useSearchParams } from 'react-router-dom'
import { AppContext, AppContent } from '../../AppContext'
import * as React from 'react'



const HomePageContent:React.FC = () => {

    
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
        <section className={`${HomePageContentStyles['container']}`}>
            <img alt="computer_image" src="https://res.cloudinary.com/dt0wfaxft/image/upload/v1641987362/Group_7886_sjnm4n.svg"/>
            <p className={`${HomePageContentStyles['main-text']}`}>Track your tickets and orders,<br /> Make payment for your order</p>
            <p className={`${HomePageContentStyles['sub-text']}`}>Check the status of your ticket or your order and engage</p>
            
            <form className={`${HomePageContentStyles['form']}`} action="" onSubmit={(e)=>handleSubmit(e)}>

                <div className={`${HomePageContentStyles['input_button_container']}`}>

                <div className={`${HomePageContentStyles['input_container']}`}>
               <InputField inputVal={inputVal} setInputVal={setInputVal} /> 
                </div>

               <Button buttonType='solid' handleTrack={handleTrack} />
                </div>

            </form>

        </section>
    )
}

export default HomePageContent

