import React, { useState, useContext } from "react";
import { secretFamilyContext } from "../context/secretFamilyContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import UpdateRecipe from "./UpdateRecipe";

const initialRecipe = {
  title: "",
  source: "",
  ingredients: "",
  instructions: "",
  image: "",
  category: ""
}

const Recipes = ({ recipe }) => {
  
  const { recipes, setRecipes } = useContext(secretFamilyContext)
  const [updateRecipe, setUpdateRecipe] = useState(initialRecipe);
  
  const handleEdit = recipe => {
    if (updateRecipe.id) {
      axiosWithAuth()
          .put(`/auth/recipes/${updateRecipe.id}`, updateRecipe)
          .then(response => {
              console.log("put response: ", response)
              setUpdateRecipe({
                  title: "",
                  source: "",
                  ingredients: "",
                  instructions: "",
                  image: "",
                  category: ""
          })
          setRecipes([...recipes.filter(recipe => recipe.id !== updateRecipe.id), updateRecipe])
      })
          .catch(err => console.log("Error in Recipe", err))
    } else {
      setUpdateRecipe(recipe)
    }
    
  }

  const handleDelete = recipe => {
    axiosWithAuth()
      .delete(`/auth/recipes/${recipe.id}`)
      .then(response => {
      setRecipes(recipes.filter(item => item.id !== recipe.id))
      })
      .catch(err => console.log("Error in Delete Function: ", err))
    }

  return (
    <div className="recipe-list">
      {recipe.id === updateRecipe.id ? (
        <div className="recipe">
          {<UpdateRecipe updateRecipe={updateRecipe} setUpdateRecipe={setUpdateRecipe}/>}
          <button className="delete-button" onClick={() => handleEdit(recipe)}>Save Changes</button>
          </div>
      ) : (

        <div className="recipe">
          <h2>{recipe.title}</h2>
          <p>{recipe.source}</p>
          <p>{recipe.ingredients}</p>
          <p>{recipe.instructions}</p>
          <p>{recipe.image}</p>
          <p>{recipe.category}</p>

          <button className="delete-button" onClick={() => handleDelete(recipe)}>Delete this recipe</button>
          <button className="delete-button" onClick={() => handleEdit(recipe)}>Update this recipe</button>
        </div>
      )}
    </div>
  );
};

export default Recipes;
