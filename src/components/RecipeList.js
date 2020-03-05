import React, { useContext, useEffect } from 'react'; 
import Recipes from './Recipes';
import { secretFamilyContext } from "../context/secretFamilyContext";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Logout from "./Logout";

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
    }, [setRecipes])

    return (
        <div>
            <h2>Recipe List</h2>
            <Logout />
            {recipes.map(recipeList =>
                <Recipes
                key={recipeList.id}
                recipe={recipeList}
                 />
            )}

        </div>
    )
}

export default RecipeList; 

