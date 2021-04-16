import React from 'react'
import RegisterForm from '../register.component'
import LoginForm from '../login.component'
import Header from '../Header/header'

function FormPage() {
    return (
        <>
        <Header />
        <div className='formContainer'>
            <div className='login'>
                <LoginForm />
            </div>
            <div className='register'>
                <RegisterForm />
            </div>
        </div>
        </>
    )
}

export default FormPage
