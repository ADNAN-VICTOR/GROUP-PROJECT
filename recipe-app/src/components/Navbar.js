import React, { useState } from "react";

export function Form({ foods }) {
    const [category, setCategory] = useState('');
    const [view, setView] = useState(null);

    const change = (type) => {
        setCategory(prevState => prevState === type ? '' : type);
    }

    const viewed = (f) => {
        setView(prevState => prevState === f ? null : f);
    }

    let filtered = foods.filter((f) => f.food_type === category);

    return (
        <>
            <div >
                <form id="form" onSubmit={(e) => e.preventDefault()}>
                    <input
                        className="btn-check"
                        type="checkbox"
                        name="vegeterian"
                        onChange={() => change('vegetarian')}
                        checked={category === 'vegetarian'}
                        id="vegeterian"
                    />
                    <label className="btn btn-outline-primary" htmlFor="vegeterian">Vegetarian</label>
                    <input
                        className="btn-check"
                        type="checkbox"
                        name="seafood"
                        onChange={() => change('seafood')}
                        checked={category === 'seafood'}
                        id="seafood"
                    />
                    <label className="btn btn-outline-primary" htmlFor="seafood">Seafood</label>
                    <input
                        type="checkbox"
                        name="pork"
                        onChange={() => change('pork')}
                        checked={category === 'pork'}
                        id="pork"
                        className="btn-check"
                    />
                    <label className="btn btn-outline-primary" htmlFor="pork">Pork</label>
                    <input
                        type="checkbox"
                        name="beef"
                        onChange={() => change('beef')}
                        checked={category === 'beef'}
                        id="beef"
                        className="btn-check"
                    />
                    <label className="btn btn-outline-primary" htmlFor="beef">Beef</label>
                    <input
                        type="checkbox"
                        name="lamb"
                        onChange={() => change('lamb')}
                        checked={category === 'lamb'}
                        id="lamb"
                        className="btn-check"
                    />
                    <label className="btn btn-outline-primary" htmlFor="lamb">Lamb</label>
                    <input
                        type="checkbox"
                        name="chicken"
                        onChange={() => change('chicken')}
                        checked={category === 'chicken'}
                        id="chicken"
                        className="btn-check"
                    />
                    <label className="btn btn-outline-primary" htmlFor="chicken">Chicken</label>
                </form>
            </div>
            {filtered.map((m) => {
                if (view === m) {
                    return (
                        <div  key={m.id} className="d-flex flex-row flex-wrap justify-content-center bg bg-info-subtle">
                            <div id="recipe" className="bg bg-secondary-subtle m-3" >
                                <img src={m.food_pic} alt={m.food_pic} />
                                <h2>{m.name}</h2>
                                <p>Calories: {m.calories}</p>
                                <p>Food Type: {m.food_type}</p>
                                <button className="btn btn-info" onClick={() => viewed(null)}>Close Recipe</button><br></br>
                                <h3>{m.recipe}</h3>
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div key={m.id} className="d-flex flex-row flex-wrap justify-content-center bg bg-info-subtle">
                            <div id="recipe" className="bg bg-secondary-subtle m-3" >
                                <img src={m.food_pic} alt={m.food_pic}/>
                                <h2>{m.name}</h2>
                                <p>Calories: {m.calories}</p>
                                <p>Food Type: {m.food_type}</p>
                                <button className="btn btn-info" onClick={() => viewed(m)}>View Recipe</button><br></br>
                            </div>
                        </div>
                    );
                }
            })}
        </>
    );
}
