import React from 'react';
import logo from '../images/movieslogo.JPG';
import {Link} from "react-router";

function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 fixed top-0 left-0 z-50 w-full">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                    <div className="flex shrink-0 items-center">
                        <img className=" w-auto h-[50px] rounded-xl hover:border-2 
                        hover:border-black" src={logo} alt="logo" />
                    </div>

                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            <Link to="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium
                                               text-white mt-2">Home</Link>
                            <Link to="/movies" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300
                                               hover:bg-gray-700 hover:text-white mt-2">Movies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</>
  )
}

export default Navbar;
