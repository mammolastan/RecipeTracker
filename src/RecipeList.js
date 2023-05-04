import React from "react";
import RecipeDisplay from "./RecipeDisplay";

function RecipeList({recipes, setRecipes}) {

//   Function to handle delete button for each recipe
  const deleteRecipe = (indexToDelete) =>{
    setRecipes((recipes) =>
      recipes.filter((post, index) => index !== indexToDelete)
    );
  }
    
//   Function to display all the recipes
  const renderRecipes = () => {
    return recipes.map((recipe, index) => {
      return <RecipeDisplay
               recipe={recipe}
               recipeKey={index}
               deleteRecipe={()=>deleteRecipe(index)}/>;
    });
  };

  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderRecipes()}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
