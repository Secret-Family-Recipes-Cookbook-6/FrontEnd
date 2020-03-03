import React, { useState, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { secretFamilyContext } from "../context/secretFamilyContext";

const NewRecipeForm = (props) => {
    console.log(props)
    const { recipe, setRecipe } = useContext(secretFamilyContext)
    const [addRecipe, setAddRecipe] = useState({
        id: Date.now(),
        title: "",
        body: "",
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
                    body: "",
                    footer: ""
                })
                setRecipe(response.data)
                props.history.push("/protected")
            })
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
        </form>
        </div>
    )
}

export default NewRecipeForm;