import React, { useContext, useState, useEffect } from 'react'; 
import Recipes from './Recipes';
import { secretFamilyContext } from "../context/secretFamilyContext";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Logout from "./Logout";
import SearchForm from "./SearchForm";

const RecipeList = () => {
    const { recipes, setRecipes } = useContext(secretFamilyContext)
    const [search, setSearch] = useState("");
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
            <Logout />
            <SearchForm setSearch={setSearch} />
          
          <br />
          <h2>Recipe List</h2>
          {recipes.filter(recipeList => recipeList.title.toLowerCase().includes(search.toLowerCase()))
          .map(recipe =>
            <Recipes key={recipe.id} recipe={recipe} />
          )}
    
            
 
            {/* {recipes.map(recipeList =>
                <Recipes
                key={recipeList.id}
                recipe={recipeList}
                 /> */}
            

        </div>
    )
}

export default RecipeList; 

