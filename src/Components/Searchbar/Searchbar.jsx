import React, { useState } from 'react';
import './searchbar.css';

const Searchbar = (props) => {
  const {setInputValue,setPage,setSearched} = props;
  const [value, setValue] = useState();
  
  function handleSubmit(event){
      event.preventDefault();
      setInputValue(value);
      setPage(prevPage => prevPage + 1);
      setSearched(true);
  }

  return (
    <>
         <form className='form' onSubmit={handleSubmit}>
            <input className="input" type="text" placeholder='Search for images...' onChange={(e) => setValue(e.target.value)}/>
            <button className='btn-search'>Search</button>
         </form>
    </>
  )
}

export default Searchbar
    