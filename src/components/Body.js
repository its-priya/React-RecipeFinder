import React, { useEffect, useState } from 'react'
import RecipeItem from './RecipeItem'
import './Body.css'
import { v4 as uuidv4 } from "uuid"

function Body(props) {
    const recipeList= props.recipeList;

    return (
        <div className="recipes">
            <h1 id="listComment">Check out these delicious food!</h1>
            <ul className="recipes-container">
                {recipeList.map( curRecipe => <RecipeItem key={uuidv4()} recipe={curRecipe.recipe}/>)}
            </ul>
        </div>
    )
} 

export default Body
