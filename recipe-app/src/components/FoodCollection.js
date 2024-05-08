import React, { useState, useEffect } from 'react';

function FoodCollection() {

  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);

  useEffect(() => {
    fetch('https://json-recipe.onrender.com/food')
      .then(response => response.json())
      .then(data => {setFoods(data); console.log(data)})
      .catch(error => console.error('Error fetching Data!!!', error));
  }, []);

  const handleViewRecipe = (food) => {
    setSelectedFood(food);
  };

  const handleGoBack = () => {
    setSelectedFood(null);
  };

  return (
    //map data here
    <div id="FoodContainer" className="d-flex flex-row flex-wrap justify-content-center bg bg-info-subtle">
      {!selectedFood ? (
        foods.map(food => (
          <div key={food.id} className="bg bg-secondary-subtle m-3">
            <img src={food.food_pic} alt="food img placeholder" />
            <h2>{food.name}</h2>
            <p>Calories: {food.calories}</p>
            <p>Food Type: {food.food_type}</p>
            <button className="btn btn-info" onClick={() => handleViewRecipe(food)}>View Recipe</button>
          </div>
        ))
      ) : (
        <div className="bg bg-secondary-subtle m-3">
          <img src={selectedFood.food_pic} alt="food img placeholder" />
          <h2>{selectedFood.name}</h2>
          <p>Calories: {selectedFood.calories}</p>
          <p>Food Type: {selectedFood.food_type}</p>
          <h3>Recipe:</h3>
          <p>{selectedFood.recipe}</p>
          <button className="btn btn-info" onClick={handleGoBack}>Go Back</button>
        </div>
      )}
    </div>
  );
}

export default FoodCollection;
