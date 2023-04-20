import React from 'react';
import './searchbar.css';

const Searchbar = (props) => {
  const {setValue,handleSubmit} = props;
  
  return (
    <>
         <form className='form' onSubmit={handleSubmit}>
            <input className="input" type="text" placeholder='Search for images...' onChange={(e) => setValue(e.target.value)}/>
            <button className='btn-search'>Search</button>
         </form>
    </>
  )
}

export default Searchbar;
