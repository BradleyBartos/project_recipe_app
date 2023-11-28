import React, { useState } from "react";
import { emptyRecipe } from "./RecipeData";

function RecipeCreate({ 
  handleNewRecipe=()=>console.log('handleNewRecipe was not defined') 
}) {

  // state for form inputs
  const [formData, setFormData] = useState(emptyRecipe);

  // handle changes to inputs
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  // handle form submissions
  const handleSubmit = (event) => {
    event.preventDefault();
    handleNewRecipe(formData);
    setFormData(emptyRecipe);
  }

  return (
    <form name='create' onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td key='name' >
              <input 
                type='text'
                required={true}
                name='name'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
              />
            </td>
            <td key='cuisine' >
              <input 
                type='text'
                required={true}
                name='cuisine'
                placeholder='Cuisine'
                value={formData.cuisine}
                onChange={handleChange}
              />
            </td>
            <td key='photo' >
              <input 
                type='url'
                required={true}
                name='photo'
                placeholder='URL'
                value={formData.photo}
                onChange={handleChange}
              />
            </td>
            <td key='ingredients' >
              <textarea 
                required={true}
                name='ingredients'
                placeholder='Ingredients'
                value={formData.ingredients}
                onChange={handleChange}
              />
            </td>
            <td key='preparation' >
              <textarea 
                required={true}
                name='preparation'
                placeholder='Preparation'
                value={formData.preparation}
                onChange={handleChange}
              />
            </td>
            <td key='submit' >
              <button name='submit' type='submit' >Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
