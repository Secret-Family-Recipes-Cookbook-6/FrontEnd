import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { secretFamilyContext } from "../context/secretFamilyContext";


const NewRecipeForm = (props) => {
    console.log("NRF props: ", props)
    const { recipe, setRecipe } = useContext(secretFamilyContext)
    const [addRecipe, setAddRecipe] = useState({
        id: Date.now(),
        title: "",
        body: [],
        footer: ""
    })

    const handleChange = event => {
        setAddRecipe({ ...addRecipe, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .post("/recipes", addRecipe)
            .then(response => {
                setAddRecipe({
                    title: "",
                    body: [],
                    footer: ""
                })
                setRecipe(response.data)
                props.history.push("/recipes")//change this back to protected when endpoints are set.
            })
    }

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
        <div>
        <form className="recipe-list" onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                placeholder="Recipe Title"
                value={addRecipe.title}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="body"
                placeholder="Recipe Instructions"
                value={addRecipe.body}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="footer"
                placeholder="Recipe Author"
                value={addRecipe.footer}
                onChange={handleChange}
            />

            <button type="submit">Add New Recipe</button>
            <br />
            <button onClick={() => {props.history.push(`update-recipe/${props.recipes.id}`)}}>Update this recipe</button>
            <br />
            <button onClick={() => handleDelete(props.recipe.id)}>Delete this recipe</button>
            
        </form>
        </div>
    )
}

export default NewRecipeForm;