import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LoggedInNavBar from './LoggedInNavBar';
import { useParams } from 'react-router-dom';


const Teachers = () => {
    const [lessons, setLessons] = useState([]);
    const { id } = useParams;

    useEffect(() => {
        axios.get("http://localhost:8000/api/lessons")
            .then(res => setLessons(res.data.lessons))
            .catch(err => console.log(err));
    }, [])

    const deleteLesson = (id) => {
        axios.delete(`http://localhost:8000/api/lessons/${id}`)
            .then(res => {
                const filteredLessons = lessons.filter(lesson => lesson._id !== id)
                setLessons(filteredLessons)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <LoggedInNavBar />
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Instructor Name</th>
                            <th scope="col">Teaches</th>
                            <th scope='col'>Schedule</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {lessons.map((lesson, i) => {
                            return (
                                <tr key={lesson._id}>
                                    <td>{lesson.instructorName}</td>
                                    <td>{lesson.instrument}</td>
                                    <td><a href="#">Schedule lesson</a></td>
                                    <td><button className="btn btn-info" onClick={(e) => deleteLesson(lesson._id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Teachers