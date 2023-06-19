import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        status: "student"
    })
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const statusHandler = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    // const formValidation = () => {
    //     let isValid = true;
    //     if (userInfo.firstName.length < 2) {
    //         return false
    //     }
    //     else if (userInfo.lastName.length < 2) {
    //         return false
    //     }
    //     else if (userInfo.email == null) {
    //         return false
    //     }
    //     else if (userInfo.password.length < 8) {
    //         return false
    //     }
    //     else if (userInfo.password.length == userInfo.confirmPassword.length) {
    //         return false
    //     }
    //     else if (userInfo.status == null) {
    //         return false
    //     }
    //     return isValid;
    // }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     if (formValidation()) {
    //         axios.post("http://localhost:8000/api/users/register", userInfo, {withCredentials: true})
    //             .then(res => {
    //                 console.log(res)
    //                 navigate('/dashboard')
    //             })
    //             .catch(err => console.log(err))
    //     } else {
    //         setErrors({
    //             firstName: "First name must be at least 2 characters.",
    //             lastName: "Last name must be at least 2 characters.",
    //             email: "Must put a valid email.",
    //             password: "Password must be at least 8 characters.",
    //             confirmPassword: "Passwords must match.",
    //             status: "Must select status."
    //         })
    //     }
    // }
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/register", userInfo, { withCredentials: true })
            .then(res => {
                console.log(res)
                navigate('/dashboard')
            })
            .catch(err => console.log(err))
        } 
        
    

    return (
        <div className="col-5 offset-1 mt-3">
            <form onSubmit={submitHandler}>
                <h3 className="text-center fw-bold fst-italic">Register</h3>
                <div className="form-group">
                    <label htmlFor="" className="form-label">First Name:</label>
                {/* {errors.firstName ? <p className="text-danger">{errors.firstName}</p> : ""} */}
                    <input type="text" className="form-control" name="firstName" value={userInfo.firstName} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Last Name:</label>
                    {/* {errors.lastName ? <p className="text-danger">{errors.lastName}</p> : ""} */}
                    <input type="text" className="form-control" name="lastName" value={userInfo.lastName} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Email:</label>
                    {/* {errors.email ? <p className="text-danger">{errors.email}</p> : ""} */}
                    <input type="email" className="form-control" name="email" value={userInfo.email} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Password:</label>
                    {/* {errors.password ? <p className="text-danger">{errors.password}</p> : ""} */}
                    <input type="password" className="form-control" name="password" value={userInfo.password} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Confirm Password:</label>
                    {/* {errors.confirmPassword ? <p className="text-danger">{errors.confirmPassword}</p> : ""} */}
                    <input type="password" className="form-control" name="confirmPassword" value={userInfo.confirmPassword} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Status:</label>
                    {/* {errors.status ? <p className="text-danger">{errors.status}</p> : ""} */}
                    <select className="form-select form-select-sm" aria-label="Small select" name="status" value={userInfo.status} onChange={statusHandler} >  
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="both">Both</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary mt-3">Register</button>
                </div>
            </form>
        </div>
    )
}
export default RegisterForm