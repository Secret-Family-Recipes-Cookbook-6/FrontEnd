import React, { useContext } from "react";
import { secretFamilyContext } from "../context/secretFamilyContext";

const UpdateRecipe = ({ updateRecipe, setUpdateRecipe }) => {
    
    const { recipes, setRecipes } = useContext(secretFamilyContext);

    const handleSubmit = recipe => {
        recipe.preventDefault();
        setRecipes([...recipes.filter(recipe => recipe.id !== updateRecipe), updateRecipe])
    }

    const handleChange = event => {
        setUpdateRecipe({...updateRecipe, [event.target.name]: event.target.value })
        console.log(updateRecipe);
    }

    return (
    <div>
        <form className="recipe-list" onSubmit={handleSubmit}>
            <h2>Update Recipe</h2>
            <label htmlFor="title">New Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Add the recipe title"
                    onChange={handleChange}
                    value={updateRecipe.title}
                />
     
            <label htmlFor="source">New Source</label>
                <textarea
                    type="text"
                    name="source"
                    placeholder="Who did the recipe come from"
                    onChange={handleChange}
                    value={updateRecipe.source}
               />

            <label htmlFor="ingredients">New Ingredients</label>
                <textarea
                    type="text"
                    name="ingredients"
                    placeholder="Ingredients for this recipe"
                    onChange={handleChange}
                    value={updateRecipe.ingredients}
                />

            <label htmlFor="instructions">New Instructions</label>
                <textarea
                    type="text"
                    placeholder="New Recipe Instructions"
                    name="instructions"
                    onChange={handleChange}
                    value={updateRecipe.instructions}
                />

            <label htmlFor="image">New Photo(Optional)</label>
                <textarea
                    type="text"
                    name="image"
                    placeholder="Photo of prepared recipe"
                    onChange={handleChange}
                    value={updateRecipe.image}
                />

            <label htmlFor="category">New Category</label>
                <textarea
                    type="text"
                    name="category"
                    placeholder="Breakfast, Lunch, Dinner or Snack?"
                    onChange={handleChange}
                    value={updateRecipe.category}
                />
        </form>
        </div>
    )
}

export default UpdateRecipe;