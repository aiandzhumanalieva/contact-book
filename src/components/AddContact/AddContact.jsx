import React,{useState} from 'react';
import MyButton from '../UI/MyButton/MyButton'
import MyInput from '../UI/MyInput/MyInput'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {GoPerson} from 'react-icons/go'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {MdAddAPhoto} from 'react-icons/md'



const AddContact = ({props}) => {
  // const initialFormState = { id: null, name: '', number: ''}
  // const [contact, setContact] = useState(initialFormState)

  // const handleInputChange = (event) => {
  //   const { name, value } = event.currentTarget
  //   setContact({...contact, [name]: value})
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   if (!contact.name || !contact.number) return

  //   //Вызываю addUser из хука из App
  //   props.addContact(contact)
  //   //Обновляем форму через setUser 
  //   setContact(initialFormState)
  // }


  return <form 
  // onSubmit={handleSubmit} 
  >
    <div 
    className='w-3/12 border-solid border-2 rounded-3xl bg-violet-200 outline-none mx-20 my-7 flex flex-col items-center'>
      <h3 className='border-solid rounded-xl bg-violet-300 text-xl text- mt-3 self-center w-48 text-center h-8 '>Create Contact</h3>
    <div className='text-lg font-semibold font-mono border-2 border-solid outline-none rounded-3xl max-w-sm w-full my-4 flex flex-col items-center bg-violet-100' >
    <div className='flex flex-col items-center'>
    <MdAddAPhoto className='w-8 h-8'/>
<MyButton>Add Photo</MyButton>
      </div>
      <div className='flex flex-col w-52 '>
    <div className='flex justify-between items-center'>
      <GoPerson className=''/>
     <MyInput 
      type="text" 
      name="name" 
      placeholder='Enter name'
      // onChange={handleInputChange}
      // value={contact.name}
       /> 
    </div>
      <div className='flex justify-between items-center'>
        <BsFillTelephoneFill/>
    <MyInput 
     type="tel" 
     name="number"   
    placeholder='Enter phone number'
    // onChange={handleInputChange}
    // value={contact.number}
      />     
      </div>
     <div className='flex justify-between items-center'>
    <MdOutlineAlternateEmail/>
      <MyInput
      type='email'
      name='email'
      placeholder='Enter email'
      />  
     </div>
     
      </div>
      <div>
      <MyButton>Save</MyButton>
      <MyButton>Cancel</MyButton>
      </div>   
    </div>
      
  
  
  </div>;
  </form>;
};

export default AddContact;
