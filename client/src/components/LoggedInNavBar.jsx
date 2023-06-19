import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoggedInNavBar = () => {
    const navigate = useNavigate();

    const logout = () => {
        axios.post("http://localhost:8000/api/users/logout", {}, { withCredentials: true })
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <nav className="nav">
                <a href="" className="site-title">Rhythm & Chords</a>
                <ul>
                    <li>
                        <a href="/dashboard">Dashboard </a>
                    </li>
                    <li>
                        <a href="/teachers">Find Lessons</a>
                    </li>
                    <li className="mt-2">
                        <button className="btn btn-danger" onClick={logout}>Logout</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default LoggedInNavBar