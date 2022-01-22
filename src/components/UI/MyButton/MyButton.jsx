import React from 'react';

const MyButton = ({children}) => {
  return <button className='border  rounded-md bg-pink-300 mx-2'
  >{children}</button>;
};

export default MyButton;
