import React, { useEffect } from 'react';
import { useState } from 'react';
import Cardlist from './Cardlist';
import Navbar from './Navbar';
import MoreImages from './MoreImages';


export default function Main() {
    const[value,setValue]=useState('')
    const[dogimages,setDogimages]=useState([])
    const[clickeddog,setClickeddog]=useState({})
    const[breeds,setBreeds]=useState(false)
    
  useEffect(()=>{
      const fetchingData=async()=>{
          const data=await fetch(`https://dog.ceo/api/breeds/list/all`)
          let fetchedDat=await data.json()
          let dogNames=Object.keys(fetchedDat.message)
          let images=[]
          await Promise.all(dogNames.map(async(dog)=>{
              const data=await fetch(`https://dog.ceo/api/breed/${dog}/images`)
              const imageData=await data.json()
                 const object={
                     label:dog,
                     url:imageData.message
                 }
                 images.push(object)
          }))
          setDogimages(images)
      }
      fetchingData();
  },[])

    function onhandlechange(e){
        setValue(e.target.value)
    }
    
    function handleClickedDog(selecteddog){
          setBreeds(true)
          setClickeddog(selecteddog)
    }

    function handleclose(){
        setBreeds(false)
        setClickeddog({})
    }

   const filterddogs=dogimages.filter((dog)=>dog.label.toLowerCase().includes(value.toLowerCase()))

  return (
  <div className='main'>
      <div id='Navbar'>
            <Navbar dogimages={dogimages}/>
            <input value={value} onChange={onhandlechange} placeholder='Search your favourite dogs' id='input'/>
            {breeds &&<MoreImages clickeddog={clickeddog} filterddogs={filterddogs} handleclose={handleclose}/>}
     </div>
     <hr id='hr'/>
     <Cardlist  filterddogs={filterddogs}  handleClickedDog={handleClickedDog} />
  </div>
  );
}
