import React, { useContext } from "react";
import { secretFamilyContext } from "../context/secretFamilyContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Recipes = props => {
  console.log("Props from Recipes: ", props)
  const { recipes, setRecipes } = useContext(secretFamilyContext)
  // const [recipe, setRecipe] = useState({
  //   title: "",
  //   source: "",
  //   ingredients: "",
  //   instructions: "",
  //   image: "",
  //   category: ""
  // });

  const handleDelete = (id) => {
    axiosWithAuth()
      .delete(`/auth/recipes/${id}`)
      .then(response => setRecipes(recipes.filter(recipe => recipe.id !== id)))
      
      .catch(err => console.log("Error in Delete Function: ", err))
  }

  return (
    <div className="recipe-list">
      
        <div className="recipe">

       
          <h2>{props.recipe.title}</h2>
          <p>{props.recipe.source}</p>
          <p>{props.recipe.ingredients}</p>
          <p>{props.recipe.instructions}</p>
          <p>{props.recipe.image}</p>
          <p>{props.recipe.category}</p>

        <button className="delete-button" onClick={() => handleDelete(props.recipe.id)}>Delete this recipe</button>

        </div>

    </div>
  );
};

export default Recipes;
