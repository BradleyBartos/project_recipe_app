import React from "react";
import RecipeDisplay from './RecipeDisplay.js'

function RecipeList({ 
  list=[], 
  handleDeletion 
}) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr key='header'>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((recipe, index) => 
            <RecipeDisplay 
              recipe={recipe} 
              index={index} 
              handleDeletion={handleDeletion} 
              key={recipe.id} 
            />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
