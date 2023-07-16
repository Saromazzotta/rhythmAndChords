import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoggedInNavBar
    from './LoggedInNavBar';

const EditLesson = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [oneLesson, setOneLesson] = useState({})
    const [errors, setErrors] = useState({}); 

    const [lesson, setLesson] = useState({
        instructorName: "",
        instrument: "",
        price: "",
        availability: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/lessons/${id}`)
            .then(res => setOneLesson(res.data.lesson))
            .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        setOneLesson({
            ...oneLesson,
            [e.target.name]: e.target.value
        })
    }

    const editLesson = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/lessons/${id}`, oneLesson)
            .then(res => navigate("/teachers"))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <LoggedInNavBar />
            <div className="row">
                <div className="col-md-6 mx-auto mt-3 text-white">
                    <h1>Edit Lesson</h1>
                    <form onSubmit={editLesson}>
                        <h2 className="text-center fw-bold fst-italic">Create Lesson</h2>
                        <div className="form-group">
                            <label htmlFor="" className="form-label fw-bold">Instructor Name:</label>
                            {/* {errors.instructorName ? <p className="text-danger">{errors.instructorName}</p> : ""} */}
                            <input type="text" className="form-control" name="instructorName" value={oneLesson.instructorName} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label fw-bold">Instrument:</label>
                            {/* {errors.instrument ? <p className="text-danger">{errors.instrument}</p> : ""} */}
                            <input type="text" className="form-control" name="instrument" value={oneLesson.instrument} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label fw-bold">Price:</label>
                            {/* {errors.price ? <p className="text-danger">{errors.price}</p> : ""} */}
                            <input type="number" step="0.01" className="form-control" name="price" value={oneLesson.price} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label fw-bold">Availability:</label>
                            {/* {errors.availability ? <p className="text-danger">{errors.availability}</p> : ""} */}
                            <input type="text" className="form-control" name="availability" value={oneLesson.availability} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mt-3 fw-bold">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditLesson