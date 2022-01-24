import React from 'react';
import ContactItem from '../ContactItem/ContactItem'

const ContactList = ({contacts}) => {
  return <div>
   {/* { contacts.map((contact)=>( */}
      <ContactItem 
      // key={contact.id}
      />
   {/* ))} */}
   
  </div>;
};

export default ContactList;
