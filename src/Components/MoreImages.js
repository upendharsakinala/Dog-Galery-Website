import React, { useEffect, useState } from 'react';

export default function SubBreed({clickeddog,handleclose}) {
const[subbreed,setSubbreed]=useState([])

useEffect(()=>{
    fetch(`https://dog.ceo/api/breed/${clickeddog.label}/list`)
    .then(response=>response.json())
    .then(data=>setSubbreed(data.message))
},[])
  return (
  <div className='More'>
    <h1 className='line'>{`More Images of ${clickeddog.label}`}</h1>
    <button onClick={handleclose} className='cancel'>X</button>
    {clickeddog.url[1]&&<img src={clickeddog.url[1]} className='more_image' alt={clickeddog.label}/>}
    {clickeddog.url[2]&&<img src={clickeddog.url[2]} className='more_image' alt={clickeddog.label}/>}
    {clickeddog.url[3]&&<img src={clickeddog.url[3]} className='more_image' alt={clickeddog.label}/>}
    {clickeddog.url[4]&&<img src={clickeddog.url[4]} className='more_image' alt={clickeddog.label}/>}
    {clickeddog.url[5]&&<img src={clickeddog.url[5]} className='more_image' alt={clickeddog.label}/>}                
  </div>
  );
}
