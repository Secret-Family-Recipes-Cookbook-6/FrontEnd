import React, { useContext, useEffect } from 'react'; 
import Recipes from './Recipes';
import { secretFamilyContext } from "../context/secretFamilyContext";
import { axiosWithAuth } from '../utils/axiosWithAuth';
//import data from "../data";
const RecipeList = () => {
    const { recipes, setRecipes } = useContext(secretFamilyContext)
    useEffect(() => {
        axiosWithAuth()
            .get("/auth/recipes")
            .then(response => {
                console.log("Recipes: ", response)
                setRecipes(response.data)
            })
            .catch(err => console.log("Error in RecipeList: ", err))
    }, [])

    return (
        <div>
            <h2>Recipe List</h2>
            {recipes.map(recipeList =>
                <Recipes
                // key={recipeList.id}
                recipe={recipeList}
                 />
            )}

        </div>
    )
}

export default RecipeList; 

