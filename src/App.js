import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
//   Set initial values, state variables
  const [recipes, setRecipes] = useState(RecipeData);
  const [formData, setFormData] = useState({});
  const initialFormData = {name:"",cuisine:"",photo:"",ingredients:"",preparation:""};

//   Function to handle form submission event
  const createNewRecipe = (event)=> {
    event.preventDefault();
    setRecipes([...recipes,formData]);
    setFormData(initialFormData);
  }
  

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} setRecipes={setRecipes}/>
      <RecipeCreate setFormData={setFormData} formData={formData} createNewRecipe={createNewRecipe}/>
      
    </div>
  );
}

export default App;
