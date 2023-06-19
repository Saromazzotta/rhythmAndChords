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

    const changeHandler = (e) => {
        setLesson({
            ...lesson,
            [e.target.name]: e.target.value
        })
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

    return (
        <div>
            <LoggedInNavBar />
            <div className="row">
                <div className="col-md-6 mx-auto mt-3">
                    <form onSubmit={submitHandler}>
                        <h3 className="text-center fw-bold fst-italic">Create Lesson</h3>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Instructor Name:</label>
                            <input type="text" className="form-control" name="instructorName" value={lesson.instructorName} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Instrument:</label>
                            <input type="text" className="form-control" name="instrument" value={lesson.instrument} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Price:</label>
                            <input type="number" step="0.01" className="form-control" name="price" value={lesson.price} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Availability:</label>
                            <input type="text" className="form-control" name="availability" value={lesson.availability} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mt-3">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LessonCreate