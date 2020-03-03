import React, { useState, useEffect } from "react";
import axios from "axios";


const initialRecipe = {
    id: "",
    title: "",
    body: "",
    footer: ""
}

const UpdateRecipe = (props) => {
    const [recipes, setRecipes] = useState(initialRecipe);

    useEffect(() => {
        axios
            .get(`/recipes/${props.id}`)
            .then(resonse => setRecipes(response.data))
    }, [props.recipes, props.id])

    const handleSubmit = event => {
        event.preventDefault();
        props.udpateRecipe(recipes)
        props.history.push("/")
    }

    const handleChange = event => {
        setItem({...recipes, [event.target.name]: event.target.value })
    }

    return (
    <div>
        <form className="recipe-list" onSubmit={handleSubmit}>
            <h2>Update Recipe</h2>
            <input 
                type="text"
                name="title"
                placeholder="Recipe Title"
                value={recipes.title}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="body"
                placeholder="Recipe Instructions"
                value={recipes.body}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="footer"
                placeholder="Recipe Author"
                value={recipes.footer}
                onChange={handleChange}
            />

            <button type="submit" onClick={() => {props.history.push(`update-recipe/${props.recipes.id}`)}}>Update Recipe</button>
        </form>
        </div>
    )
}