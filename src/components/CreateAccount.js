import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const validate = ({ username, password }) => {
	const errors = {};

	if (!username) {
		errors.username = 'Please enter a username';
	} else if (username.length < 5) {
		errors.username = 'Your username must have five characters or more';
    }
    
	if (!password) {
		errors.password = 'Please enter a password';
	} else if (password.length < 5) {
		errors.password = 'Your password must have five characters or more';
	}

	return errors;
};

const CreateAccount = (props) => {
	return (
		<div>
			<Header />
			<section className='create-account'>
				<h2>Create an Account</h2>

				<Formik
					initialValues={{
						username : '',
						password : '',
					}}
					onSubmit={(values, tools) => {
						axiosWithAuth()
							.post('/LogIn', values)
							.then((response) => {
								localStorage.setItem('token', response.data.token);
								props.history.push('/');
								tools.resetForm();
							})
							.catch((error) => {
								console.log(error);
							});
					}}
					validate={validate}>
					{() => {
						return (
							<Form className='form' autoComplete='off'>
								<div className='input-container'>
									<label htmlFor='username'>User Name</label>
									<Field name='username' type='text' placeholder='Enter User Name' />
									<ErrorMessage name='username' component='div' className='error' />
								</div>

								<div className='input-container'>
									<label htmlFor='password'>Password</label>
									<Field name='password' type='password' placeholder='Enter Password' />
									<ErrorMessage name='password' component='div' className='error' />
								</div>

								<button className='create-account-button button-spacing' type='submit'>
									Create Account
								</button>
							</Form>
						);
					}}
				</Formik>

				<Link to='/LogIn'>
					<p>Already have an account? Log in here.</p>
				</Link>
			</section>
		</div>
	);
};

export default CreateAccount;