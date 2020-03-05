import React, { useState, useContext } from "react";
import { secretFamilyContext } from "../context/secretFamilyContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialRecipe = {
    title: "",
    source: "",
    ingredients: "",
    instructions: "",
    image: "",
    category: ""
  }

const UpdateRecipe = (props) => {
    console.log("Update props", props)
    const { recipes, setRecipes } = useContext(secretFamilyContext);
    const [updateRecipe, setUpdateRecipe] = useState(initialRecipe);

    const handleSubmit = recipe => {
    if (updateRecipe.id) {
        axiosWithAuth()
            .put(`/auth/recipes/${updateRecipe.id}`, updateRecipe)
            .then(response => {
                console.log("put response", response)
                setUpdateRecipe({
                    title: "",
                    source: "",
                    ingredients: "",
                    instructions: "",
                    image: "",
                    category: ""
            })
            setRecipes([...recipes.filter(recipe => recipe.id !== updateRecipe), updateRecipe])
            
        })
            .catch(err => console.log("Error in RecipeForm", err))
    } else {
        setUpdateRecipe(recipe)
    }
  }

    const handleChange = event => {
        setUpdateRecipe({...updateRecipe, [event.target.name]: event.target.value })
    }

    return (
    <div>
        <form className="recipe-list" onSubmit={handleSubmit}>
            <h2>Update Recipe</h2>
            <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Add the recipe title"
                    onChange={handleChange}
                    value={updateRecipe.title}
                />
     
            <label htmlFor="source">Recipe Source</label>
                <textarea
                    type="text"
                    name="source"
                    placeholder="Who did the recipe come from"
                    onChange={handleChange}
                    value={updateRecipe.source}
               />

            <label htmlFor="ingredients">Ingredients List</label>
                <textarea
                    type="text"
                    name="ingredients"
                    placeholder="Ingredients for this recipe"
                    onChange={handleChange}
                    value={updateRecipe.ingredients}
                />

            <label htmlFor="instructions">Recipe Instructions</label>
                <textarea
                    type="text"
                    placeholder="Instructions for this recipe"
                    name="instructions"
                    onChange={handleChange}
                    value={updateRecipe.instructions}
                />

            <label htmlFor="image">Photo(Optional)</label>
                <textarea
                    type="text"
                    name="image"
                    placeholder="Photo of prepared recipe"
                    onChange={handleChange}
                    value={updateRecipe.image}
                />

            <label htmlFor="category">Recipe Category</label>
                <textarea
                    type="text"
                    name="category"
                    placeholder="Breakfast, Lunch, Dinner or Snack?"
                    onChange={handleChange}
                    value={updateRecipe.category}
                />

            <button type="submit" onClick={() => {props.history.push(`/auth/recipes/${props.id}`)}}>Update Recipe</button>
        </form>
        </div>
    )
}

export default UpdateRecipe;