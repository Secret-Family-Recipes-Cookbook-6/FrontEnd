import React from "react";

const Recipes = props => {

  return (
    <div className="recipe-list">
      {props.recipes.map(recipe => (
        <div className="recipe" key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.body}</p>
          <p>{recipe.footer}</p>
        </div>
        
      ))}
     
    </div>
  );
};

export default Recipes;
