import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData.map(recipe => {return {id: generateKey(), ...recipe}}));
  function handleNewRecipe (recipeData) {
    setRecipes([...recipes, {id: generateKey(), ...recipeData}]);
  };
  const handleDeletion = async (indexToDelete) => {
    console.log('Before deletion')
    console.log(recipes)
    setRecipes(recipes.filter((recipe, index) => index !== indexToDelete));
    setTimeout(() => {
      console.log('After deletion');
      console.log(recipes);
    }, 10)
  };
  console.log('App load')
  console.log(recipes)
  
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
const generateKey = () => {
  return (Math.random() * Date.now()).toFixed().toString();
}

export default App;
