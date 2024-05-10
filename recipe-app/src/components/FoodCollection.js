import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

export function FoodCollection() {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://json-recipe.onrender.com/food")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setFilteredFoods(data); // Initialize filteredFoods with all foods
      })
      .catch((error) => console.error("Error fetching Data!!!", error));
  }, []);

  const handleViewRecipe = (food) => {
    setSelectedFood(food);
  };

  const handleGoBack = () => {
    setSelectedFood(null);
  };

  useEffect(() => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoods(filtered);
  }, [searchTerm, foods]);

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div id="FoodContainer" className="d-flex flex-row flex-wrap justify-content-center bg bg-info-subtle">
        {!selectedFood ? (
          filteredFoods.map((food) => (
            <div key={food.id} className="bg bg-secondary-subtle m-3">
              <img src={food.food_pic} alt="food img placeholder" />
              <h2>{food.name}</h2>
              <p>Calories: {food.calories}</p>
              <p>Food Type: {food.food_type}</p>
              <button className="btn btn-info" onClick={() => handleViewRecipe(food)}>View Recipe</button>
            </div>
          ))
        ) : (
          <div id="recipe" className="bg bg-secondary-subtle m-3">
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
    </div>
  );
}


