import './App.css';
import {FoodCollection} from './components/FoodCollection';
import SearchBar from './components/SearchBar';
import { Form } from './components/Navbar';
import React,{useState,useEffect} from 'react';
function App() {
  const [foods, setFoods] = useState([])
  useEffect(() => { 
    fetch("https://json-recipe.onrender.com/food")
    .then(res => res.json())
    .then(data => {setFoods(data); console.log(data)})
    .catch(error => console.error("Error fetching Data!!!", error))
    
  }, [])

  return (
    <div>
      
      <SearchBar />
      <Form foods={foods}/>
      <FoodCollection foods={foods}/>
    </div>
  );
}

export default App;
