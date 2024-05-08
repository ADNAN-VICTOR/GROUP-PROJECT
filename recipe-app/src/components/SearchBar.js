import React from "react";



function SearchBar() {
    return(
        <div>
            <header>
                <form className="search-form">
                    <div className="div-input p-4"> 
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

