import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'


const Teachers = () => {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/lessons")
            .then(res => setLessons(res.data.lessons))
            .catch(err => console.log(err));
    }, [])



    return (
        <div>
            <NavBar />
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Teaches</th>
                            <th scope='col'>Schedule</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lessons.map((lesson, i) => {
                            return (
                                <tr key={lesson._id}>
                                    <td></td>
                                    <td>{lesson.instrument}</td>
                                    <td><a href="#">Schedule a lessons</a></td>
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