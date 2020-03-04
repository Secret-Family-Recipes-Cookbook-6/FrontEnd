import React, { useContext } from 'react'; 
import Recipes from './Recipes'; 

const RecipeList = () => {
    const { } = useContext(secretFamilyContext)
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

