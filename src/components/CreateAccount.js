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

		</div>
	);
};

export default CreateAccount;