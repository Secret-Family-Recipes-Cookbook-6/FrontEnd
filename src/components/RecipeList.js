import React, { useContext, useEffect } from 'react'; 
import Recipes from './Recipes';
import { secretFamilyContext } from "../context/secretFamilyContext";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const RecipeList = () => {
    const { recipes, setRecipes } = useContext(secretFamilyContext)
    useEffect(() => {
        axiosWithAuth()
            .get("/recipes")
            .then(response => {
                console.log("Recipes: ", response)
                setRecipes(response.data)
            })
            .catch(err => console.log("Error in RecipeList: ", err))
    }, [setRecipes])

    return (
        <div>
            <h2>Recipe List</h2>
            {recipes.map(recipeList =>
                <Recipes
                key={recipeList.id}
                recipe={recipes}
                 />
            )}

        </div>
    )
}

export default RecipeList; 

