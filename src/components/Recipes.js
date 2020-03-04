import React, { useContext } from "react";
import { secretFamilyContext } from "../context/secretFamilyContext";

const Recipes = props => {
  console.log("Props from Recipes: ", props)
  const { recipes, setRecipes } = useContext(secretFamilyContext)
  
  return (
    <div className="recipe-list">
      {/* {props.recipes.map(recipe => ( */}
        <div className="recipe">
          <h2>{recipes.title}</h2>
          <p>{recipes.body}</p>
          <p>{recipes.footer}</p>
        </div>
        
      {/* )
      )} */}
     
    </div>
  );
};

export default Recipes;
