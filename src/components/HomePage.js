import React,{useState,useEffect} from 'react';
import Movies from './Movies';
import {useLocation} from "react-router";

function HomePage() {

  const [enableMovie,setEnableMovie]=useState(false);

  const location=useLocation();

  const handleMovieList=()=>{
    setEnableMovie((prev)=>!prev);
  }

  useEffect(()=>{
    if (location.pathname==="/"){
      setEnableMovie(false);
    }
},[location]);

  return (
   <>
   <div className=''>

        {
          enableMovie ? <Movies /> :
        

        <div className='mt-10 absolute inset-0 flex flex-col justify-center items-center text-white
         bg-black bg-opacity-50'>

            <h1 className='mt-10 text-5xl font-bold text-center mb-7 text-yellow-500'>
                Dive Into an Unforgettable Movie Experience—<br />All Genres,
                 All Emotions, All Here."</h1>
            <p className='text-white w-[1120px] text-[18px] font-bold mb-8 font-sans text-center '>
              "Dive into a world of captivating stories, breathtaking visuals, and unforgettable moments.
                 Whether you're in the mood for heart-pounding action, side-splitting comedy, or soul-stirring drama,
                  we have it all. Discover your next favorite film, explore by genre, and immerse yourself in the
                   magic of cinema—all in one place. Let the reel journey begin!"</p>

            <div className='flex'>
                <button className=' bg-blue-950 p-3 rounded-lg w-[200px] text-xl font-bold
                hover:bg-gray-900 hover:scale-105 transition duration-300 ease-in-out mt-5
                hover:text-yellow-500'
                onClick={handleMovieList}>
                    Discover Now</button>

            </div>
        </div>
}
   
   </div>
   </>
  )
}

export default HomePage
