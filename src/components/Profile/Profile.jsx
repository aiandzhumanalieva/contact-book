import React from 'react';
import MyButton from '../UI/MyButton';
const Profile = () => {
  return <div>
      <div className='w-4/12 border rounded-3xl bg-violet-200 outline-none mx-20 my-7 flex flex-col items-center'>
  <svg className='bg-stone-300 rounded-full'xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" fill="none" viewBox="0 0 30 30" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
 <h4>Name</h4>
 <p>phone number</p>
 <p>email</p>
 <MyButton>Edit Contact</MyButton>
 <MyButton>Delete</MyButton>
  </div>
  </div>;
};

export default Profile;
