import React, { useEffect, useContext } from "react";
import { secretFamilyContext } from "../context/secretFamilyContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Recipes = props => {
  // imported Context for handleDelete/Delete button and axiosWithAuth for the delete function. - KG
  const { recipe, setRecipe } = useContext(secretFamilyContext);

  useEffect(() => {
    axiosWithAuth()
      .get("/recipes")
      .then(response => {
        console.log("Recipes: ", response)
        setRecipe(response.data)//guessing response - no endpoints yet - KG
      })
  }, [setRecipe])

  const handleDelete = (id) => {
    axiosWithAuth()
      .delete(`recipes/${id}`)
      .then(response => setRecipe(recipe.filter(recipe => recipe.id !== id)))
      .catch(err => console.log("Error", err))
  }

  return (
    <div className="recipe-list">
      {props.recipes.map(recipe => (
        <div className="recipe" key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.body}</p>
          <p>{recipe.footer}</p>
        </div>
        
      ))}
      {/* Added Delete button to this component - KG */}
      <button onClick={() => handleDelete(props.recipe.id)}>Delete this recipe!</button>
    </div>
  );
};

export default Recipes;
