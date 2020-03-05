import React, { useState, useEffect } from "react";
import axios from "axios";
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
    const [recipes, setRecipes] = useState(initialRecipe);

    useEffect(() => {
        axios
            .get(`/auth/recipes/${props.id}`)
            .then(response => setRecipes(response.data))
    }, [props.recipes, props.id])

    const handleSubmit = event => {
        event.preventDefault();

        axiosWithAuth()
            .put("/auth/recipes", recipes)
            .then(response => {
            console.log("put response", response)
                setRecipes({
                    title: "",
                    source: "",
                    ingredients: "",
                    instructions: "",
                    image: "",
                    category: ""
            })
            setRecipes(response.data)
            props.history.push("/protected")
        })
    .catch(err => console.log("Error in RecipeForm", err))
  }

        props.updateRecipe(recipes)
        // props.history.push("/")
    

    

    const handleChange = event => {
        setRecipes({...recipes, [event.target.name]: event.target.value })
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
                    value={recipes.title}
                />
     
            <label htmlFor="source">Recipe Source</label>
                <textarea
                    type="text"
                    name="source"
                    placeholder="Who did the recipe come from"
                    onChange={handleChange}
                    value={recipes.source}
               />

            <label htmlFor="ingredients">Ingredients List</label>
                <textarea
                    type="text"
                    name="ingredients"
                    placeholder="Ingredients for this recipe"
                    onChange={handleChange}
                    value={recipes.ingredients}
                />

            <label htmlFor="instructions">Recipe Instructions</label>
                <textarea
                    type="text"
                    placeholder="Instructions for this recipe"
                    name="instructions"
                    onChange={handleChange}
                    value={recipes.instructions}
                />

            <label htmlFor="image">Photo(Optional)</label>
                <textarea
                    type="text"
                    name="image"
                    placeholder="Photo of prepared recipe"
                    onChange={handleChange}
                    value={recipes.image}
                />

            <label htmlFor="category">Recipe Category</label>
                <textarea
                    type="text"
                    name="category"
                    placeholder="Breakfast, Lunch, Dinner or Snack?"
                    onChange={handleChange}
                    value={recipes.category}
                />

            <button type="submit" onClick={() => {props.history.push(`/auth/recipes/${props.recipes.id}`)}}>Update Recipe</button>
        </form>
        </div>
    )
}

export default UpdateRecipe;