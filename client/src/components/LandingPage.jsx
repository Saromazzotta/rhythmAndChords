import React from 'react'
import NavBar from './NavBar';

const LandingPage = () => {
    return (
        <div>
            <NavBar />
            
            <div className="container">
                <div className="row mt-3">
                    <div className="col" style={{color: "white"}}>
                        <h1 className='text-center fw-bold fst-italic'>Flexible, affordable learning with top-rated instructors</h1>
                    </div>
                    <div className="row mt-3">
                        {/* <div className="col">
                            <img src={require("../Images/piano.jpeg")} alt={"Piano Picture"} />
                        </div>
                        <div className="col">
                            <h2>Lessons Offered:</h2>
                            <h3>Piano</h3>
                            <h3>Drum</h3>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-6">
                            <img src={require("../Images/drums.jpeg")} alt={"Drum Picture"} />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage