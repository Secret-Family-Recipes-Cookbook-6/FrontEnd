import React, { useContext } from "react";
import { secretFamilyContext } from "../context/secretFamilyContext";

const Recipes = props => {
  console.log("Props from Recipes: ", props)
  const { recipes, setRecipes } = useContext(secretFamilyContext)

  return (
    <div className="recipe-list">
      
        <div className="recipe">
          <h2>{recipes.title}</h2>
          <p>{recipes.source}</p>
          <p>{recipes.ingredients}</p>
          <p>{recipes.instructions}</p>
          <p>{recipes.image}</p>
          <p>{recipes.category}</p>
        </div>
    </div>
  );
};

export default Recipes;
