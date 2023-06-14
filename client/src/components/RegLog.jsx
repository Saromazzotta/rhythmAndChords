import React from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import NavBar from './NavBar'

export const RegLog = () => {
    return (
        <div className="row">
            <NavBar />
            <RegisterForm />
            <LoginForm/>    
        </div>
    )
}
