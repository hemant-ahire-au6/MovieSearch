import React,{useState,useEffect} from 'react'
import Movie from "./Componets/Movie"

// APi key :7d69b76bbb69c83b9dff51943d6520e7
//API link:https://api.themoviedb.org/3/movie/550?api_key=7d69b76bbb69c83b9dff51943d6520e7

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7d69b76bbb69c83b9dff51943d6520e7"

const SEARCH_API ="https://api.themoviedb.org/3/search/movie?api_key=7d69b76bbb69c83b9dff51943d6520e7&query="

function App(){
   const [movies,setMovies]= useState([])
   const [searchTerm,setSearchTerm]= useState("")

   useEffect(()=>{
        fetch(FEATURED_API)
        .then(res=>res.json())
        .then(data =>{  
            
            setMovies(data.results) 
        })
   },[])

   const handleOnSubmit = (e) =>{
       e.preventDefault()

       if(searchTerm){
        fetch(SEARCH_API+searchTerm)
        .then(res=>res.json())
        .then(data =>{  
            console.log(data)
            setMovies(data.results) 
        })

        setSearchTerm("")
       }
   }

   const handleOnChange = (e) => {
   setSearchTerm(e.target.value)
  
   
}

    return(<>
    <header >
        <form onSubmit={handleOnSubmit}>
        <input 
            className="search" 
            type="text" 
            placeholder="search"
            value= {searchTerm}
            onChange={handleOnChange}
        />
        </form>
        
    </header>
        <div className="movie-container">
            {movies.map(movie=>{
               return <Movie key={movie.id} data={movie}/>
            })}
        </div>
        </>
    )
}

export default App;