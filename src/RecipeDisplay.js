import React from "react";
import { emptyRecipe } from "./RecipeData";

function RecipeDisplay({ 
  recipe = {...emptyRecipe}, 
  handleDeletion 
}) {
  // handle button
  const handleDeleteClick = () => handleDeletion(recipe.id);

  return recipe == null ? null : 
    <tr>
      <td>
        <p>{recipe.name}</p>
      </td>
      <td>
        <p>{recipe.cuisine}</p>
      </td>
      <td>
        <img src={recipe.photo} alt={recipe.name} />
      </td>
      <td>
        <p>{recipe.ingredients}</p>
      </td>
      <td>
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button type='button' name='delete' onClick={handleDeleteClick} >Delete</button>
      </td>
    </tr>
}

export default RecipeDisplay;
