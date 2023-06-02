import React from 'react';
import {BiSearch} from 'react-icons/bi'//importing icon
export default function Search(props) {
  return (
    <div className='flex justify-center m-5 p-5'>
      <input 
      onChange={props.handleChange}
      type="text"
      className="m-3 mt-0 mb-0 p-1.5 w-1/2 shadow-2xl bg-white bg-opacity-10 rounded-lg bg-transparent" />
      <button>
        {/* using icon component */}
        <BiSearch
        className="text-4xl"
        onClick={props.handleClick}
        />
      </button>
    </div>
  );
}