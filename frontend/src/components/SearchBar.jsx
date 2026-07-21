import React from "react";

function SearchBar({searchText,setSearchText}){


  return (

    <div className="search-container">

      <input

        type="text"

        value={searchText}

        onChange={(e)=>setSearchText(e.target.value)}

        placeholder="Search products, brands, categories..."

      />


      <button>

        🔍 Search

      </button>


    </div>

  );

}


export default SearchBar;