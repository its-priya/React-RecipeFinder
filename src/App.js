import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Axios from 'axios';
import { useState , useEffect } from 'react';

function App() {
    const [dishType, updateDishType]= useState('desert');
    const [healthLabel, updatehealthLabel]= useState('vegetarian');
    const [recipeList, updateRecipeList]= useState([]);
    const [timeoutId, updateTimeoutId]= useState();
    const [def, setDef] = useState(true);

    const YOUR_APP_ID = "f08c7a95";
    const YOUR_APP_KEY = "25d8642daed3232d954e0758b85b5ecd";
    
    const getRecipes= async () => {
        const result= await Axios.get(
            `https://api.edamam.com/search?q=${dishType}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthLabel}`
        ); 
        console.log(result);
        updateRecipeList(result.data.hits);
        if(result.data.more==false)
          document.getElementById("listComment").textContent= "Oops.. Sorry, we don't have that in our store!";
        else{
          if(def)
            document.getElementById("listComment").textContent= "Check out these delicious food!";
          else
            document.getElementById("listComment").textContent= "Look I found your favourite food recipes!";
        }
    }
    const setRecipeList = () =>{
        clearTimeout(timeoutId);
        console.log(dishType+"  "+healthLabel);
        const timeout= setTimeout(() =>  getRecipes(), 500);
        updateTimeoutId(timeout);
    }

  const submitDishType = (e) => {
    if(e.key==='Enter'){
      if(e.target.value===''){
        setDef(true);
        updateDishType('desert');
      }
      else{
        setDef(false);
        updateDishType(e.target.value);
      }
    }
  }
  const submitHealthLabel = (e) => {
    updatehealthLabel(e.target.value);
  }

  useEffect(()=>{
    setRecipeList();
  }, [dishType, healthLabel]);

  return (
    <Router>
      <Header submitDishType={submitDishType} submitHealthLabel={submitHealthLabel}/>
      <Body recipeList={recipeList}/>
    </Router>
  );
}

export default App
