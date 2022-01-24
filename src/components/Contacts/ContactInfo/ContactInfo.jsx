import React from 'react';

const ContactInfo = ({children}) => {
  return  <p 
  className='flex items-center h-10 outline-0 bg-transparent 
  border-2 border-violet-300  
  rounded-xl my-4
  placeholder:bg-blend-color-dodge'>{children}</p>

};

export default ContactInfo;
