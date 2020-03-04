import React, { useState, useEffect, useContext } from "react";
import { secretFamilyContext } from "../context/secretFamilyContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const RecipeForm = props => {
  console.log("RF: ", props)
  
  const { recipes, setRecipes } = useContext(secretFamilyContext)
  const [recipe, setRecipe] = useState({
    id: Date.now(),
    title: "",
    body: "", 
    footer: ""
  });

  console.log("Recipe", recipe)
  const handleChanges = event => {
    console.log("event", event.target.value);
    setRecipe({ ...recipe, [event.target.name]: event.target.value });

  };

  const submitForm = event => {
    event.preventDefault();
    // props.addNewRecipe(recipe);
    // setRecipe({ title: "", body: "", footer: ""});
    axiosWithAuth()
      .post("/recipes", recipe)
      .then(response => {
        console.log("post response", response)
        setRecipe({
          title: "",
          body: "",
          footer: ""
        })
        setRecipes(response)
        props.history.push("/")
      })
  };
    useEffect(() => {
      axiosWithAuth()
        .get("/recipes")
        .then(response => {
          console.log("Recipes: ", response)
          setRecipes(response.data)
        })
    }, [setRecipes])

    const handleDelete = (id) => {
      axiosWithAuth()
        .delete(`/recipes/${id}`)
        .then(response => setRecipes(recipe.filter(recipe => recipe.id !== id)))
        .catch(err => console.log("Error: ", err))
    }

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
      <br />
      <button onClick={() => handleDelete(props.recipe.id)}>Delete this recipe</button>
    </form>
  );
};

export default RecipeForm;