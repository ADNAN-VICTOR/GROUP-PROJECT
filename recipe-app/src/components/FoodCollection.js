import React, { useState } from "react";
import { useEffect } from "react";

function FoodCollection() {
  
  const [foods, setFoods] = useState([])

  useEffect(() => { 
    fetch("https://json-recipe.onrender.com/food")
    .then(res => res.json())
    .then(data => {setFoods(data); console.log(data)})
    .catch(error => console.error("Error fetching Data!!!", error))
    
  }, [])

  return (
      //map data here
      <div>
        <h1>Food Collection</h1>
        <div id="FoodContainer" className="d-flex flex-row flex-wrap justify-content-center bg bg-info-subtle"> 
      
            {foods.map(food => (
              <div key={food.id} className="bg bg-secondary-subtle m-3">
              <img src= {food.food_pic} alt= {food.name} />
              <h2>{food.name}</h2>
              <p>Calories: {food.calories}</p>
              <p>Food Type: {food.food_type}</p>
              <button className="btn btn-info">View Recipe</button>
            </div>
            ))}
        </div>
      </div>
    );
  }
  
  export default FoodCollection;
