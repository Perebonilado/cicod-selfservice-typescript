import HomePageContentStyles from './HomePageContentStyles.module.css'
import InputField from '../InputField'
import React, { useState } from 'react'
import Button from '../Button'


const HomePageContent:React.FC = () => {

    const [inputVal, setInputVal] = useState <string>('')
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(inputVal)
        setInputVal('')
    }
    
    return (
        <section className={`${HomePageContentStyles['container']}`}>
            <img alt="computer_image" src="https://res.cloudinary.com/dt0wfaxft/image/upload/v1641987362/Group_7886_sjnm4n.svg"/>
            <p className={`${HomePageContentStyles['main-text']}`}>Track your tickets and orders,<br /> Make payment for your order</p>
            <p className={`${HomePageContentStyles['sub-text']}`}>Check the status of your ticket or your order and engage</p>
            
            <form className={`${HomePageContentStyles['form']}`} action="" onSubmit={(e)=>handleSubmit(e)}>
               <InputField inputVal={inputVal} setInputVal={setInputVal} /> 
               <Button buttonType='solid'/>
            </form>

        </section>
    )
}

export default HomePageContent