import React, { useState } from "react";

function RecipeCreate({setFormData,formData,createNewRecipe}) {


// Update state values upon input by user  
  const handleChange = ({target}) => {
    setFormData({...formData,
                [target.id]:target.value
                });
  }

  return (
    <form name="create" onSubmit={createNewRecipe}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
              name="name"
              id="name"
              type="text"
              placeholder="Name"
              onChange={handleChange} 
              value={formData.name}/>
            </td>
            <td>
            <input
              name="cuisine"
              id="cuisine"
              type="text"
              placeholder="Cuisine"
              onChange={handleChange}
              value={formData.cuisine}/>
            </td>
            <td>
            <input
              name="photo"
              id="photo"
              type="url"
              placeholder="Photo"
              onChange={handleChange}
              value={formData.photo}/>
            </td>
            <td>
              <textarea
              name="ingredients"
              id="ingredients"
              placeholder="Ingredients"
              onChange={handleChange}
              value={formData.ingredients}>
                
              </textarea>
              
            </td>
            <td>
            <textarea
              name="preparation"
              id="preparation"
              placeholder="Preparation"
              onChange={handleChange}
              value={formData.preparation}>
                
              </textarea>
            </td>                                                
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
