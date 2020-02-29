import React, { useState } from "react";

const RecipeForm = props => {
 
const [recipe, setRecipe] = useState({
  title: "", 
  body: ""
}); 
  
  const handleChanges = event => {
    console.log("event", event.target.value); 
    setRecipe({...recipe, [event.target.name]: event.target.value}); 
  };

  
const submitForm = event => {
  event.preventDefault(); 
  props.addNewRecipe(recipe); 
  setRecipe({ title: "", body: ""});
}
  
  return (
    <form onSubmit={submitForm}>
      
      <label htmlFor="title">Title</label>
      
      <input 
        id="title" 
        type="text" 
        onChange={handleChanges} 
        placeholder="Enter recipe title" 
        value={recipe.title} 
        name="title" />
      
      <label htmlFor="body">Ingredients | Instructions</label>

      <textarea
        id="recipe" 
        placeholder="Add your ingredients and instructions." 
        value={recipe.body} 
        onChange={handleChanges} 
        name="body" />

      
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;