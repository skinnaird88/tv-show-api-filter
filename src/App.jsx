import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './SearchBar'

function App() {

  const [shows, setShows] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    getShows();
  }, []);

  function getShows(){
    fetch('https://api.tvmaze.com/shows')
    .then((res) => res.json())
    .then((res)=> setShows(res))
  }


  return (
    <div className='upper-container'>
    <header className='header'>TV Shows</header>
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} shows={shows}/>
    </div>
  )
}

export default App
