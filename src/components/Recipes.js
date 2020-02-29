import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Header from './Header/Header';

const Recipes = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const fetchRecipes = () => {
			axiosWithAuth()
				.get('/Recipes')
				.then((response) => {
					setRecipes(response.data);
				})
				.catch((error) => {
					console.error(error);
				});
		};
		fetchRecipes();
	}, []);

	return (
		<div>
			<Header />
			<div className='recipes'>
				<h2>Family Recipes</h2>
				<div className='recipe'>
					{recipes.map((iteration, index) => {
						return (
							<div className='recipe' key={index}>
								<div>
									<h3>{iteration.Recipes}</h3>
								</div>
								<div>
									<Link to={`/Recipes${iteration.id}`}>See All Recipes</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Recipes;