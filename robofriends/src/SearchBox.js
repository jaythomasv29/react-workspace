import React from 'react'

const SearchBox = ({searchChange}) => { //onChange function that runs a function every button changed
    return(
        <div className="pa2">
        <input className="pa3 tc ba b--green bg-lightest-blue" type="search" placeholder="Search for robots" onChange={searchChange}/> 
        </div>
    )
}
export default SearchBox