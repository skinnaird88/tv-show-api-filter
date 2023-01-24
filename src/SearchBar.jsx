import React from 'react'
import SearchResults from './SearchResults'
import './SearchBar.css'

const SearchBar = ({searchTerm, setSearchTerm, shows}) => {

  function handleChange(e){
    setSearchTerm(e.target.value)
  }

  const filteredShows = shows.filter(
    show => {
        return (
          show
          .name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
          show
          .premiered
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
          )
      } 
  )




  return (
    <div className='search-container'>
      <br></br>
    <input className='search' onChange={handleChange} placeholder='Search by title or date'></input>
    <SearchResults filteredShows={filteredShows}/>
    </div>
  )
}

export default SearchBar