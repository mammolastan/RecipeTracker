import React from "react";
import "./RecipeDisplay.css";

function RecipeDisplay({recipe, recipeKey, deleteRecipe}) {
  return (
    <tr key={recipeKey}>
      <td><p>{recipe.name}</p></td>
      <td><p>{recipe.cuisine}</p></td>
      <td><img src={recipe.photo} /></td>
      <td className="content_td"><p>{recipe.ingredients}</p></td>
      <td className="content_td"><p>{recipe.preparation}</p></td>
      <td>
        <button onClick={deleteRecipe} name="delete">Delete</button>
      </td>
    </tr>
  );
}
export default RecipeDisplay;
