import React, { useState } from 'react';

const Signup = () => {
    const [cook, setCook ] = useState({
        name: '',
        email: '',
        password: ''
    })

    const changeHandler = event => {
        setCook({
            ...cook, [event.target.name]: event.target.value
        })
    }

    

    return (
        <div>
            <form className='form-container'>
               <input 
               onChange={changeHandler}
               name='name'
               type="text"/> 
            </form>
        </div>
    );
};

export default Signup;