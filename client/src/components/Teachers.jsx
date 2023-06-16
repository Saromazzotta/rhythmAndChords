import React from 'react'
import NavBar from './NavBar'

const Teachers = () => {
    return (
        <div>
            <NavBar />
            <container className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Teaches</th>
                            <th scope='col'>Schedule</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td><a href="#">Schedule Lesson</a></td>
                        </tr>
                    </tbody>
                </table>
            </container>
        </div>
    )
}

export default Teachers