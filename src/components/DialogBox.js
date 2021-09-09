import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { List, ListItem, ListItemText } from '@material-ui/core';
import './DialogBox.css'

function DialogBox(props) {
    const {open, handleDialogClick, recipeIngredients, recipeTitle}= props;
    return (
        <Dialog open={open} onClose={handleDialogClick}>
            <div className="ingredients-container">
            <DialogTitle className="dialog-title">
                {recipeTitle}
            </DialogTitle>
            <hr/>
            <DialogContent className="ingredient-title">
                <p className="ig">Ingredient</p>
                <p className="wg">Weight</p>
            </DialogContent>
            <List>
                {
                    recipeIngredients.map(ingredient => (
                        <ListItem className="ingredient-wrapper">
                            <ListItemText primary={ingredient.text} className="ingredient-name"/>
                            <ListItemText primary={Math.round(ingredient.weight * 100)/100} className="ingredient-weight"/>
                        </ListItem>
                    ))
                }
            </List>
            <DialogActions>
                <button onClick={handleDialogClick} 
                        className=" btn btn-rec" autoFocus>
                    Got it!
                </button>
            </DialogActions>
            </div>
        </Dialog>
    )
}

export default DialogBox
