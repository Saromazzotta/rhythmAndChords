import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar'

const Dashboard = () => {
    const navigate = useNavigate();

    const logout = () => {
        axios.post("http://localhost:8000/api/users/logout", {}, { withCredentials: true })
            .then(res => {
                console.log(res)
                navigate("/")})
            .catch(err => console.log(err))
    }
    return (
        <div>
            <NavBar/>
            <h1>Welcome!</h1>
            <button className="btn btn-danger" onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard