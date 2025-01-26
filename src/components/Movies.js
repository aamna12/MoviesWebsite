import React from 'react';
import movieList from "./movies.json";

function Movies() {
  return (
    <>
    <div className='absolute inset-0 z-20 flex flex-wrap justify-center gap-6 p-6 mt-[70px]'>
     
      {
        movieList.map((movie)=>(
            <div  className="overflow-hidden w-[180px] bg-black p-3 rounded-xl shadow-md cursor-pointer
            hover:border-4 hover:border-yellow-600 hover:text-yellow-500 text-white"
             key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
                <h3 className=' text-center font-bold mt-3'>{movie.Title} - {movie.Year}</h3>
            </div>
        ))
      }
    </div>

    </>
  )
}

export default Movies
