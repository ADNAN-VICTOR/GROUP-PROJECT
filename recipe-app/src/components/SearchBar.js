import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div>
        <header>
            <form className="search-form">
                <div className="div-input p-4">
                    <input
                         className="search-input"
                        type="text"
                        placeholder="Search 🔎"
                        value={searchTerm}
                        onChange={handleSearch}
                     />
                 </div>
            </form> 
        </header>
    </div>
  );
}

export default SearchBar;
