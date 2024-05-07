import React from "react";

function FoodCollection() {
    return (
      //map data here
      <div>
        <h1>Food Collection</h1>
        <div id="FoodContainer" className="bg bg-info-subtle"> 
            <div className="bg bg-secondary-subtle m-3">
              <img src="linkplace holder" alt="food img placeholder" />
              <h2>Food Name Placeholder</h2>
              <p>Calories:</p>
              <p>Food Type:</p>
              <button className="btn btn-info">View Recipe</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default FoodCollection;
