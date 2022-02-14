import React from 'react';

export default function Cardlist({filterddogs,handleClickedDog}) {
  return (
  <div className='main_image'>
      {
          filterddogs.map((dog)=>{
            return (
                <div className='cardlist' onClick={()=>handleClickedDog(dog)}>
                  {<img src={dog.url[0]} alt='Dog_Image' className='image'/>}
                  {<h3>{dog.label}</h3>}
                </div>
            )
          })
      }

  </div>
  );
}

