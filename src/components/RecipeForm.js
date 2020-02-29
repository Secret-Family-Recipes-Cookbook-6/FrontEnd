import React, { useState } from "react";

const RecipeForm = props => {
  const [recipe, setRecipe] = useState({
    title: "",
    body: "", 
    footer: ""
  });
  
  const handleChanges = event => {
    console.log("event", event.target.value);
    setRecipe({ ...recipe, [event.target.name]: event.target.value });

  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewRecipe(recipe);
    setRecipe({ title: "", body: "", footer: ""});
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        onChange={handleChanges}
        placeholder="Add the recipe title"
        value={recipe.title}
        name="title"
      />
     
      <label htmlFor="body">What & How</label>
      <textarea
        id="note"
        placeholder="Add the ingredients and instructions here."
        value={recipe.body}
        onChange={handleChanges}
        name="body"
      />

      <label htmlFor="footer">Who Or Where</label>
      <textarea
        id="footer"
        placeholder="Where (place or person) did the recipe come from."
        value={recipe.footer}
        onChange={handleChanges}
        name="footer"
      />

      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;