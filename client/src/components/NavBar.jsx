import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <h2 className="fw-bold fst-italic mx-5" style={{color: "white"}} >Rhythm & Chords</h2>
                <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                    <a href="/" className="navbar-brand">Home</a>
                    <a href="#" className="navbar-brand">Find Lessons</a>
                    <a href="/login" className="navbar-brand">Sign in</a>
                    <form className="d-flex justify-content-end">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-info" type="submit">Search</button>
                    </form>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar