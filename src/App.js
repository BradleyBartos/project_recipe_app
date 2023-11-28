import React, { useCallback, useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData.map(recipe => {return {id: generateKey(), ...recipe}}));

  function handleNewRecipe (recipeData) {
    setRecipes([...recipes, {id: generateKey(), ...recipeData}]);
  };

  const handleDeletion = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList list={recipes} handleDeletion={handleDeletion} />
      <RecipeCreate handleNewRecipe={handleNewRecipe} />
    </div>
  );
}

/**
 * Function for generating ids to use in table keys
 */
export const generateKey = () => {
  const id = (Math.random() * Date.now()).toFixed().toString();
  return id;
}

export default App;
