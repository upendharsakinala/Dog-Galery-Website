import React, { useEffect, useState } from 'react';
import './CustomSearch.css'

export default function CustomSearch({dogimages,handleclose}) {
const[option,setOption]=useState('')
const[number,setNumber]=useState( )
const[render,setRender]=useState(false)
const[image,setImage]=useState([])

function handleOptionChange(breed){
     setOption(breed.target.value)
}

function handleNumberInput(e){
    setNumber(e.target.value)
    console.log(e.target.value);
}



function onclickclear(e){
  setRender(false)
  setImage([])
 
}

const options= dogimages.map((dog)=><option>{dog.label}</option>)

useEffect(()=>{
      if(number && option){
          setRender(true)
          fetch(`https://dog.ceo/api/breed/${option}/images/random/${number}`)
          .then(response=>response.json())
          .then(data=>setImage(data.message))      
      }
    },[number,option])
        
  
  return (
      <div className='popup'>
        <div className='breed_popup'>
        <h1 id='search_custom'>Custom Search</h1>
        <button onClick={handleclose} className='cancel'>X</button>
        <div className='select_box'>
          <select onChange={handleOptionChange} className='select'>
            <option hidden value='default'>Select Breed</option>
            {options}
          </select>
        <input type='number' onChange={handleNumberInput} className='num' placeholder='Enter number of images'/>
        <button onClick={onclickclear} className='reset'>Reset Images</button>
        </div>
        <div>
           {render && <h3 className='line'>{`Showing ${number} images of ${option} Dog.`}</h3>}
            {image.map((breed) => <img src={breed} alt='Breed_image' className='img'/>)}
        </div>
        </div>
      </div>
  );
}
