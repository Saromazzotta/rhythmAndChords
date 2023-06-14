import React from 'react'
import axios from 'axios';
import NavBar from './NavBar';
import ImageMover from './ImageMover';

const LandingPage = () => {

    // const pianoApi = () => {
    //     axios.get('https://rapidapi.com/jsdisco/api/piano-chords')
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch(err => console.log(err))
    // }

    // const options = {
    //     method: 'GET',
    //     url: 'https://piano-chords.p.rapidapi.com',
    //     headers: {
    //         'X-RapidAPI-Key': '',
    //         'X-RapidAPI-Host': 'piano-chords.p.rapidapi.com'
    //     }
    // };

    // try {
    //     const response = axios.request(options);
    //     console.log(response.data);
    // } catch (error) {
    //     console.error(error);
    // }

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row mt-3">
                    <div className="col">
                        <h2>Flexible, affordable learning with top-rated instructors</h2>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage