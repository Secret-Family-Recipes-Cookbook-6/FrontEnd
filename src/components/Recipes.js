import React, { useContext } from "react";
import { secretFamilyContext } from "../context/secretFamilyContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Recipes = props => {
  console.log("Props from Recipes: ", props)
  const { recipes, setRecipes } = useContext(secretFamilyContext)

  const handleDelete = (id) => {
    axiosWithAuth()
      .delete(`/recipes/${id}`)
      .then(response => setRecipes(recipes.filter(recipe => recipe.id !== id)))
      .catch(err => console.log("Error in Delete Function: ", err))
  }

  return (
    <div className="recipe-list">
      
        <div className="recipe">
          <h2>{recipes.title}</h2>
          <p>{recipes.source}</p>
          <p>{recipes.ingredients}</p>
          <p>{recipes.instructions}</p>
          <p>{recipes.image}</p>
          <p>{recipes.category}</p>
        </div>
        
        <button onClick={() => handleDelete(props.recipes.id)}>Delete this recipe</button>
    </div>
  );
};

export default Recipes;
