import React from "react";
export function Form(){
    return(
        <div className="">
        <form id="form">
        <button name="All" >Delicacies</button>
        <input type="checkbox" name="vegeterian" id="vegeterian"/>
        <label for="vegeterian">Vegeterian</label>
        <input type="checkbox" name="seafood" id="seafood"/>
        <label for="seafood">Seafood</label>
        <input type="checkbox" name="pork" id="pork"/>
        <label for="pork">Pork</label>
        <input type="checkbox" name="beef" id="beef"/>
        <label for="beef">Beef</label>
        <input type="checkbox" name="lamb" id="lamb"/>
        <label for="lamb">Lamb</label>
        <input type="checkbox" name="chicken" id="chicken"/>
        <label for="chicken">Chicken</label>
        </form>
        </div>
    )
}