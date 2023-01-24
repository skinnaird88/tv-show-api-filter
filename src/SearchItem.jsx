import React from 'react'

const SearchItem = ({ show }) => {
  return (
    <>
        <p className='list-item'>{show.name} - {show.premiered}</p>
    </>
  )
}

export default SearchItem