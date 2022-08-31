import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
//import Navbar from 'react-bootstrap/Navbar';
import "./Header.scss"

function Drop({options}) {

  const [showOptions, setShowOptions] = useState(false);
 const handleClick = () => {
  setShowOptions(!showOptions);
 }
 
 return (<div>
    
    <button  onClick={handleClick} className="" aria-label="toggle menu" data-nav-toggler>
            <FiMenu class="nav-toggle-btn " />
           
          </button>

 {showOptions && (
   <div class="absolute right-0 mt-[29px] w-[25rem] origin-top-right rounded-md  font-primary bg-eerie shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
   <div class="py-1" role="none">
     <a href="#" class="text-gray-700 block px-4 py-2 text-[3rem] hover:text-yellow-800" role="menuitem" tabindex="-1" id="menu-item-0">Home</a>
     <a href="#" class="text-gray-700 block px-4 py-2 text-[3rem]  hover:text-yellow-800" role="menuitem" tabindex="-1" id="menu-item-1">Live</a>
     <a href="#" class="text-gray-700 block px-4 py-2 text-[3rem]  hover:text-yellow-800" role="menuitem" tabindex="-1" id="menu-item-2">Features</a>
     
     <a href="#" class="text-gray-700 block px-4 py-2 text-[3rem]  hover:text-yellow-800" role="menuitem" tabindex="-1" id="menu-item-2">Shop</a>
     <a href="#" class="text-gray-700 block px-4 py-2 text-[3rem]  hover:text-yellow-800" role="menuitem" tabindex="-1" id="menu-item-2">Arcade</a>
     <form action="#" role="none">
       <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-[2rem]" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
     </form>
   </div>
 </div>
 )}      
  </div>  );
}

export default Drop;