import React from 'react'


const LoggedInNavBar = () => {
    return (
        <div>
            <nav className="nav">
                <a href="/" className="site-title">Rhythm & Chords</a>
                <ul>
                    <li>
                        <a href="">Find Lessons</a>
                    </li>
                    <li>
                        <a href="/login">Sign In</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default LoggedInNavBar