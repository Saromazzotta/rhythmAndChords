import React, { useState, useEffect } from 'react'
import LoggedInNavBar from './LoggedInNavBar';
import axios from 'axios';

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    // Find One
    // useEffect((id) => {
    //     axios.get(`http://localhost:8000/api/users/${id}`)
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err));
    // }, [])

    // Find All
    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/users/all")
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err));
    // }, [])

    return (
        <div>
            <LoggedInNavBar />
            <div className="row">
                <div className="">
                    <h1 className='text-start mx-4 mt-2 text-white fst-italic'>Dashboard</h1>
                </div>
                <a href="/lesson/create" className='text-start mx-4'>Make a lesson </a>
            </div>
            <div className="row">
                {/* {users.map((user) => {
                    return (
                        <div key={user._id} className="div">
                            <h3 className='text-white'>Welcome, {user.firstName}</h3>
                            <h2>{user.status}</h2>
                        </div>
                    )
                })} */}
            </div>
        </div>
    )
}

export default Dashboard