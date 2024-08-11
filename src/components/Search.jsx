import React from "react";
import './Search.css';
import { CiSearch } from "react-icons/ci";
function Search(){
    return(
        <>
        <div className="flex ">
        <label htmlFor="search">
        <input  id="input"
        type="search" placeholder="Search" ></input>
      </label><button>< CiSearch size={30}/></button>
      </div>
      </>
    )
}
export default Search;