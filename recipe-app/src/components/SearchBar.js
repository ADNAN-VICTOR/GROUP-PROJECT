import React from "react";



function SearchBar() {
    return(
        <div>
            <header>
                <form className="search-form">
                    <div>
                        <h2 className="recipeDiv">Recipe App</h2>
                    </div>
                    <div className="div-input"> 
                        <input 
                            className="search-input"
                            type="search"
                            placeholder="Search"
                        />
                        
                            
                        
                        
                    </div>
                </form> 
            </header>
            
        </div>
        
    )
    
}

export default SearchBar

