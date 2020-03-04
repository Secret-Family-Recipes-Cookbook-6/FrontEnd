import React from 'react'; 
import Recipes from './Recipes'; 

const RecipeList = () => {
    return (
        <div>
            <h2>Recipe List</h2>
            {recipe.map(recipeList =>
                <Recipes
                key={recipeList.id}
                recipe={recipeList}
                addNewRecipe={addNewRecipe} />
            )}

        </div>
    )
}

export default RecipeList; 

