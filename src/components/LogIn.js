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
					name="password"
					onChange={handleChange}
					value={credentials.password}
				/>
				<br />
				<button type="submit">Login</button>
			</form>
        </div>
	);
};

export default LogIn;