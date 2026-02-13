import { useState } from 'react'

import Ingredients from './components/Ingredients.jsx';
import GetRecipe from './components/GetRecipe.jsx'
import getRecipeFromChefGemini from './api.js'


function App() {
  const [ingredients, setIngredients] = useState([])
  const [showRecipe, setRecipe] = useState(false)
  const [recipe, setRecipeText] = useState("")

  async function hfRecipe(ingredients){
    const recipeText = await getRecipeFromChefGemini(ingredients)
    setRecipeText(recipeText)
  }
   const toggleRecipe = ()=>{
    hfRecipe(ingredients)
    setRecipe(showRecipe => !showRecipe)
   }

    function handleChange (formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

  return (
    <main>
          <form action={handleChange} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

       {ingredients.length > 0 && <Ingredients 
       ingredients= {ingredients}
       toggleRecipe= {toggleRecipe}/>}

       {showRecipe && <GetRecipe recipe={recipe}/>}
    </main>
  );
}

export default App
