import React, { useState } from 'react'
import LoggedInNavBar from './LoggedInNavBar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LessonCreate = () => {
    const navigate = useNavigate();
    // const [userInfo, setUserInfo] = ({
    //     firstName: ""
    // })

    const [lesson, setLesson] = useState({
        instructorName: "",
        instrument: "",
        price: "",
        availability: ""
    })

    const [errors, setErrors] = useState({}); 

    const changeHandler = (e) => {
        setLesson({
            ...lesson,
            [e.target.name]: e.target.value
        })
    }

    const formValidation = () => {
        let isValid = true;
        if (!lesson.instructorName) {
            return false
        } else if (lesson.instrument != "Drums" || "Piano") {
            return false
        } else if (lesson.price = null) {
            return false
        } else if (!lesson.availability) {
            return false
        }
        return isValid;
    }

    const submitHandler = (e) => {
        e.preventDefault()
            axios.post("http://localhost:8000/api/lessons", lesson)
                .then(res => {
                    console.log(res)
                    navigate('/teachers')
                })
                .catch(err => console.log(err));
        }

    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     if (formValidation()) {
    //         axios.post("http://localhost:8000/api/lessons", lesson)
    //             .then(res => {
    //                 console.log(res)
    //                 navigate('/teachers')
    //             })
    //             .catch(err => console.log(err));
    //     }
    //     else {
    //         setErrors({
    //             instructorName: "Instructor name is required.",
    //             instrument: "Instrument is required.",
    //             price: "Price is required.",
    //             availability: "Availability is required.",
    //         })
    //     }
    // }

    return (
        <div>
            <LoggedInNavBar />
            <div className="row">
                <div className="col-md-6 mx-auto mt-3 text-white">
                    <form onSubmit={submitHandler}>
                        <h2 className="text-center fw-bold fst-italic">Create Lesson</h2>
                        <div className="form-group">
                            <label htmlFor="" className="form-label fw-bold">Instructor Name:</label>
                            {errors.instructorName ? <p className="text-danger">{errors.instructorName}</p> : ""}
                            <input type="text" className="form-control" name="instructorName" value={lesson.instructorName} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label fw-bold">Instrument:</label>
                            {errors.instrument ? <p className="text-danger">{errors.instrument}</p> : ""}
                            <input type="text" className="form-control" name="instrument" value={lesson.instrument} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label fw-bold">Price:</label>
                            {errors.price ? <p className="text-danger">{errors.price}</p> : ""}
                            <input type="number" step="0.01" className="form-control" name="price" value={lesson.price} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label fw-bold">Availability:</label>
                            {errors.availability ? <p className="text-danger">{errors.availability}</p> : ""}
                            <input type="text" className="form-control" name="availability" value={lesson.availability} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mt-3 fw-bold">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LessonCreate