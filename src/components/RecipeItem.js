import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DialogBox from './DialogBox';

function RecipeItem({recipe}){
    const {label, image, url, ingredients}= recipe;
    const [open, setOpen]= useState(false);

    const handleDialogClick = () =>{
        setOpen(!open);
    }

    return (
        <>
            <li className="card-item">
                <Link className="card-item-link" to='/'>
                    <figure className="card-item-image-wrap" data-category='Ingredients'>
                        <img src={image} alt={label} className="card-item-image"></img>
                    </figure>
                    <div className="card-item-info">
                        <p className="card-item-title">{label}</p>
                    </div>
                    <div className="card-item-btns">
                        <button className="btn btn-ing" onClick={handleDialogClick}>Ingredients</button>
                        <button className="btn btn-rec" onClick={() => window.open(url, '_blank')}>Recipe</button>
                    </div>
                </Link>
            </li>
            <DialogBox open={open} handleDialogClick={handleDialogClick} recipeIngredients={ingredients} recipeTitle={label}/>
        </>
    )
}

export default RecipeItem
