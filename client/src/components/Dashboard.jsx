import React from 'react'
import LoggedInNavBar from './LoggedInNavBar';

const Dashboard = () => {

    return (
        <div>
            <LoggedInNavBar/>
            <div className="row">
                <div className="">
                    <h1>Welcome!</h1>
                </div>
            </div>
            <a href="/lesson/create">Make a lesson </a>
        </div>
    )
}

export default Dashboard