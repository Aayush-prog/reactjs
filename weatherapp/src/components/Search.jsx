import React from 'react';
import {BiSearch} from 'react-icons/bi'
export default function Search(props) {
  return (
    <div className='flex justify-center m-5 p-5'>
      <input 
      onChange={props.handleChange}
      type="text"
      className="m-3 p-1 w-1/2 border border-solid border-black rounded-lg" />
      <button>
        <BiSearch
        className="text-4xl"
        onClick={props.handleClick}/>
      </button>
    </div>
  );
}