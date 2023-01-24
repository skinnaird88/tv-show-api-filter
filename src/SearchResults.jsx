import React from 'react'
import SearchItem from './SearchItem'
import SearchList from './SearchList'

const SearchResults = ( {filteredShows} ) => {

    const showResults = filteredShows.map((show) => {
        return <SearchItem show={show}/>
    })

  return (
    <div className='search-container'>
        <p className='search-header'>Search results:</p>
        <SearchList showResults={showResults} />
        </div>
  )
}

export default SearchResults