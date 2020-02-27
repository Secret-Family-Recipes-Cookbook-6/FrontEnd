import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { Formik, Form, Field } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const LogIn = (props) => {
	const [ error, setError ] = useState('');

	return (
		<div>
			<Header />
			<section className='log-in'>
				<h2>Log In</h2>

				<Formik
					initialValues={{
						username : '',
						password : '',
					}}
					onSubmit={(values, tools) => {
						axiosWithAuth()
							.post('LogIn', values)
							.then((response) => {
								localStorage.setItem('token', response.data.token);
								props.history.push('/');
								tools.resetForm();
							})
							.catch((error) => {
								console.log(error);
								if (error) {
									setError('Incorrect password and email combination');
								}
							});
					}}>
					{() => {
						return (
							<Form className='form' autoComplete='off'>
								<div className='input-container'>
									<label htmlFor='username'>User Name</label>
									<Field name='username' type='text' placeholder='Enter User Name' />
								</div>

								<div className='input-container'>
									<label htmlFor='password'>Password</label>
									<Field name='password' type='password' placeholder='Enter Password' />
									<p className='sign-in-error'>{error}</p>
								</div>

								<button className='log-in-button button-spacing' type='submit'>
									Log In
								</button>
							</Form>
						);
					}}
				</Formik>

				<Link to='/CreateAccount'>
					<p>Don't have an accoount? Create an account</p>
				</Link>
			</section>
		</div>
	);
};

export default LogIn;