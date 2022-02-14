import React, { useState } from 'react';
import CustomSearch from './CustomSearch/CustomSearch';



export default function Navbar({dogimages}) {
    const[customsearch,setCustomsearch]=useState(false)
  function handleClick(){
    setCustomsearch(prev=>!prev)
  }
  
  function handleclose(){
    setCustomsearch(false)
  }
  return (
  <div>
   <h1>Dog Gallery</h1>
   <button onClick={handleClick} id="custom-btn">Custom Search</button>
   {customsearch && <CustomSearch  dogimages={dogimages} handleclose={handleclose} />}
  </div>
  );
}
