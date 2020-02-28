import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const LogIn = (props) => {
	const [ credentials, setCredentials ] = useState({
		username: "",
		password: ""
	});

	const handleChange = event => {
		setCredentials({ ...credentials, [event.target.name]: event.target.value })
	}

	const handleSubmit = event => {
		event.preventDefault();
		axiosWithAuth()
			.post("/login", credentials)
			.then(response => {
				console.log("Login: ", response)
				localStorage.setItem("token", response.data.payload)
				setCredentials({
					username: "",
					password: ""
				})
				props.history.push("/protected")
			})
			.catch(err => {
				localStorage.removeItem("token")
				console.log("Error: ", err)
			})
	}
	return (
		<div>
			
			<form onSubmit={handleSubmit}>
				<label htmlFor='username'>User Name: </label>
				<input
					type="text"
					placeholder="Username"
					name="username"
					onChange={handleChange}
					value={credentials.username}
				/>
				<br />
				<label htmlFor='password'>Password: </label>
				<input
					type="password"
					placeholder="Password"
					name="pasword"
					onChange={handleChange}
					value={credentials.password}
				/>
				<br />
				<button type="submit">Login</button>
			</form>
			{/* <Header />
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
			</section> */}
		</div>
	);
};

export default LogIn;