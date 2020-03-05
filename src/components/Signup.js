import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Signup = (props) => {
    const [cook, setCook ] = useState({
        username: '',
        email: '',
        password: ''
    })

    const changeHandler = event => {
        setCook({
            ...cook, [event.target.name]: event.target.value
        })
    }
    const submitForm = e => {
        e.preventDefault()
        console.log(cook)
        axiosWithAuth()
          .post("/register", cook)
          .then(response => {
            console.log(response.data);
            setCook(response.data);
            props.history.push("/login")
          })
          .catch(error => {
            console.log("Data returned an error", error);
          });
    }
    

    return (
        <div>
            <form className='form-container' onSubmit={submitForm}>
               <label htmlFor="name">Name:
                <input 
                onChange={changeHandler}
                id="username"
                name="username"
                type="text"
                value={cook.name}/>
                </label>

              <label htmlFor="email">Email:
                <input 
                onChange={changeHandler}
                id="email"
                name="email"
                type="text"
                value={cook.email}/>
                </label>

              <label htmlFor="password">Password:
                <input 
                onChange={changeHandler}
                id="password"
                name="password"
                type="text"
                value={cook.password}/>
                </label>

                <br />
				        <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;