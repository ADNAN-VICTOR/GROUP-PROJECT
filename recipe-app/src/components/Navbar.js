import React, { useState} from "react";
export function Form({foods}){
const [category,setCategory]=useState({foods})
const[view,setView]=useState()
console.log(category,'c')
let change =(type)=>{
       setCategory(prevState=>prevState===type? true:type)
}
 function viewed(f){
    console.log(view,'v')
setView(prevState=>prevState===f? null:f)
 }
let filtered= foods.filter((f)=>f.food_type===category)
    return(
        <>
        <div className="">
        <form id="form" onSubmit={(e)=>e.preventDefault()}>
        <input 
        type="checkbox"
         name="vegeterian" 
         onChange={()=>change('vegetarian')}
         checked={category==='vegetarian'}
         id="vegeterian"
         />
        <label htmlFor="vegeterian">Vegetarian</label>
        <input type="checkbox"
         name="seafood" 
         onChange={()=>change('seafood')}
          checked={category==='seafood'}
          id="seafood"/>
        <label htmlFor="seafood">Seafood</label>
        <input type="checkbox"
         name="pork" 
         onChange={()=>change('pork')}
         checked={category==='pork'}
         id="pork"/>
        <label htmlFor="pork">Pork</label>
        <input type="checkbox" 
        name="beef" 
        onChange={()=>change('beef')}
        checked={category==='beef'}
        id="beef"/>
        <label htmlFor="beef">Beef</label>
        <input type="checkbox" 
        name="lamb" 
        onChange={()=>change('lamb')}
        checked={category==='lamb'}
        id="lamb"/>
        <label htmlFor="lamb">Lamb</label>
        <input type="checkbox"
         name="chicken"        
         onChange={()=>change('chicken')}
         checked={category==='chicken'}

         id="chicken"/>
        <label htmlFor="chicken">Chicken</label>
        </form>
        </div>
        <ul>
            {filtered.map((m)=>(
                    <div key={m.id} style={{ display: 'flex' }}>
                    <img src={m.food_pic} alt="food img placeholder" />
                    <div style={{marginLeft:"10px"}}>
                 <h2>{m.name}</h2>
                 <p>Calories: {m.calories}</p>
                 <p>Food Type: {m.food_type}</p>
                 <button onClick={()=>viewed(m)}>{view===m ?'Close Recipe':"View Recipe"}</button><br></br>
                
                 </div>
                 </div>
            ))}
        </ul>
        {view &&(
            <div style={{marginLeft:'10px'}}>
            <h3 >{view.recipe}</h3>
            </div>
        )}
        </>
    )
}