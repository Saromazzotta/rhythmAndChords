import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoggedInNavBar from './LoggedInNavBar';

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
            <LoggedInNavBar/>
            <div className="row">
                <div className="col-sm-6">
                    <h1>Welcome!</h1>
                </div>
                <div className="col-sm-6">
                    <button className="btn btn-danger" onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard