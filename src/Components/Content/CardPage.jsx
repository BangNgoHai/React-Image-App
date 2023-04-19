import React, { useState } from 'react';
import Cards from './Cards';
import './card.css';


const CardPage = (props) => {
  const {data,page,searched,handleSubmit} = props;
  const results = data.results;
  function handleClick(){
    console.log("Clicked");
  }

  return (
    <>
      {searched ? <>
        <div className='cards-container'>
        {results.map((result)=>{
          return (
            <Cards 
            imageSrc={result.urls.small}
            imageAlt={result.alt_description}
            imageHref={result.links.html}
            imageTarget="_blank"
            imageContent={result.alt_description}
            />
          );
        })}
      </div>
      </>: null}
      {page > 1 && (   // = {page > 1 ? <> </>:....} would also work
        <div style={{display:"flex",justifyContent:"center",marginBottom:"20px"}}>
          <button className='show-more-btn' onClick={handleClick}>Show more</button> 
        </div>
      )}
    </>
  )
}

export default CardPage
