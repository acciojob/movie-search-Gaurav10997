
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      const App = () => {
  const [search , setSearch] = useState()
  const [movies , setMovies] = useState([])

  const handleClick = () => {
   
    fetch(`https://www.omdbapi.com/?apikey=2e9796e9&s=${search}`)
    .then(res=>res.json())
    .then(data=>setMovies(data.Search))
    setSearch("")
  }
  return (
    <div  >
      <input type="text"  onChange={(e)=>setSearch(e.target.value)} />
      <button style={{backgroundColor:"red", color:"white"  , height:"50px" ,  } } onClick={handleClick} >Search</button>
      <ul>
        {movies && movies.map((movie)=>(
          <div   key={movie.imdbID}>
            <li>{movie.Title}</li>
            <img src={movie.Poster}/>
          </div>
         
        ))}
        {!movies && <p>Invalid Movie Name</p>}
      </ul>
    </div>
  )
}

export default App
    </div>
  )
}

export default App
