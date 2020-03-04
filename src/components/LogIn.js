import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from "react-router-dom";

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
				localStorage.setItem("token", response.data.token)
				setCredentials({
					username: "",
					password: ""
				})
				props.history.push("/protected")
			})
			.catch(err => {
				localStorage.removeItem("token")
				console.log("Login Error: ", err)
			})
	}

	return (
		<div>
			<form className="recipe-list" onSubmit={handleSubmit}>
				<label className="label" htmlFor='username'>User Name: </label>
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
				<br />
                Don't have an account yet?
				<Link to="/">Register here!</Link>
			</form>
        </div>
	);
};

export default LogIn;