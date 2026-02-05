import { useState } from "react"

export default function Ingredients(){

  const [ingredients, setIngredients] = useState([])

    const ingredientListItems = ingredients.map(ingredient=>
        <li key={ingredient}>{ingredient} </li>
    )

    function handleChange (event){
        event.preventDefault()
        console.log("form submitted")
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingrediant")
        console.log(newIngredient)
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    return(
        <main>
            <form onSubmit={handleChange} className="add-ingredient-form">
                <input type="text" placeholder="Rice" aria-label="Add Ingredients" name="ingrediant"/>
                <button>Add ingredient</button>
            </form>
           {ingredients.length > 0 && <section>
                <h2>Ingredients on hand :</h2>
                <ul className="ingredients-list"> {ingredientListItems}</ul>
            {ingredients.length >2  && <div className="get-recipe-container">
                <div>
                    <h3>Ready for recipe</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button>Get a recipe</button>
             </div>}
            </section> }
            
        </main>
    )
}