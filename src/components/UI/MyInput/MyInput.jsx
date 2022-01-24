import React from 'react';

const MyInput = ({placeholder,type, value, onChange}) => {
  return <input 
  value={value}
  onChange={onChange}
  placeholder={placeholder}
  type={type}
  className=' w-44
  text-violet-300 
  h-10 outline-0 bg-transparent 
  border-2 border-violet-300  
  rounded-xl my-2 
  placeholder:bg-blend-color-dodge'
  ></input>;
};

export default MyInput;
