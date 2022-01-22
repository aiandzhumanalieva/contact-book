import React, {useState} from 'react';
import CreateContact from '../CreateContact/CreateContact';
import Profile from '../Profile/Profile'


const Home = () => {
  const [todos, setTodos] = useState ([])
  return <>
  <CreateContact/>
<Profile/>
  </>
};

export default Home;

