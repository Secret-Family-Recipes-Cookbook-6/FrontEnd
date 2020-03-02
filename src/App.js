import React, { useState } from 'react';

const App = () => {
    const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Cheese Crackers",
      body:
        "2 Cups Of Assorted Cheeses, Grated Generously, Spread Over Crackers", 
        footer: "Aunt Mary"
    }
  ]);

  const addNewRecipe = recipe => {
    const newRecipe = {
      id: Date.now(), // gives a unique id
      title: recipe.title, 
      body: recipe.body, 
      footer: recipe.footer
    }; 
    setRecipes([...recipes, newRecipe])
  }

    return (
        <div className="App">
            <h1>Family Recipes</h1>
            <RecipeForm addNewRecipe={addNewRecipe} />
            <Recipes recipes={recipes} />

            
        </div>
    );
};

export default App;