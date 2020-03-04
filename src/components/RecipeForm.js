import React, { useState, useEffect, useContext } from "react";
import { secretFamilyContext } from "../context/secretFamilyContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const RecipeForm = props => {
  console.log("RecipeForm Props: ", props)
  
  const { recipes, setRecipes } = useContext(secretFamilyContext)
  const [recipe, setRecipe] = useState({
    id: Date.now(),
    title: "",
    source: "",
    ingredients: "",
    instructions: "",
    image: "",
    category: ""
  });

  console.log("Recipe", recipe)
  const handleChanges = event => {
    console.log("event", event.target.value);
    setRecipe({ ...recipe, [event.target.name]: event.target.value });

  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewRecipe(recipe);
    //setRecipe({ title: "", body: "", footer: ""});
    axiosWithAuth()
      .post("/recipes", recipe)
      .then(response => {
        console.log("post response", response)
        setRecipe({
          title: "",
          source: "",
          ingredients: "",
          instructions: "",
          image: "",
          category: ""
        })
        setRecipes(response)
        props.history.push("/recipes")
      })
      .catch(err => console.log("Error in RecipeForm", err))
    };

    const handleDelete = (id) => {
      axiosWithAuth()
        .delete(`/recipes/${id}`)
        .then(response => setRecipes(recipe.filter(recipe => recipe.id !== id)))
        .catch(err => console.log("Error in Delete Function: ", err))
    }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Title</label>
      <input
        //id="title"
        type="text"
        onChange={handleChanges}
        placeholder="Add the recipe title"
        value={recipe.title}
        name="title"
      />
     
      <label htmlFor="source">Recipe Source</label>
      <textarea
        //id="source"
        placeholder="Who did the recipe come from."
        value={recipe.source}
        onChange={handleChanges}
        name="source"
      />

      <label htmlFor="ingredients">Ingredients List</label>
      <textarea
        //id="ingredients"
        placeholder="Ingredients for this recipe."
        value={recipe.ingredients}
        onChange={handleChanges}
        name="ingredients"
      />

      <label htmlFor="instructions">Recipe Instructions</label>
      <textarea
        //id="instructions"
        placeholder="Instructions for this recipe."
        value={recipe.instructions}
        onChange={handleChanges}
        name="instructions"
      />

      <label htmlFor="image">Photo(Optional)</label>
      <textarea
        //id="image"
        placeholder="Photo of prepared recipe."
        value={recipe.image}
        onChange={handleChanges}
        name="image"
      />

      <label htmlFor="category">Recipe Category</label>
      <textarea
        //id="category"
        placeholder="Breakfast, Lunch, Dinner or Snack?"
        value={recipe.category}
        onChange={handleChanges}
        name="category"
      />

      <button type="submit">Add Recipe</button>
      <br />
      <button onClick={() => handleDelete(props.recipe.id)}>Delete this recipe</button>
    </form>
  );
};

export default RecipeForm;