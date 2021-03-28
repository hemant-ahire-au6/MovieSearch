import React from "react"


const Img_API = "https://image.tmdb.org/t/p/w500"

function Movie(props){

    const {title,poster_path,overview,vote_average} = props.data
   
    return(
      
       <div className="movie">
           <img src={Img_API+poster_path} alt={title} />
           <div className="movie-info">
               <h3>{title}</h3>
               <span>{vote_average}</span>
           </div>
           <div className="movie-over">
               <h3>OverView:</h3>
               <p>{overview}</p>
           </div>
       </div>
    )
}

export default Movie;