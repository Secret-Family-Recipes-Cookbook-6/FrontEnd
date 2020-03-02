import React, { useState } from 'react';

const Signup = () => {
    const [cook, setCook ] = useState({
        name: '',
        email: '',
        password: ''
    })

    return (
        <div>
            <form  onSubmit={submitForm} className='form-container'>
               <input 
               onChange={changeHandler}
               name='name'
               type="text"/> 
            </form>
        </div>
    );
};

export default Signup;