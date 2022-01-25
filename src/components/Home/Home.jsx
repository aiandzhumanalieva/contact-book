import React, { useState } from 'react'
import ContactList from '../Contacts/ContactList/ContactList'
import AddContact from '../AddContact/AddContact'

const Home = () => {
	const [contacts, setContacts] = useState([
		{ id: 1, name: 'Aian', number: '+996707630993', email: 'aya24@gmail.com' },
		{ id: 2, name: 'Maria', number: '+996707241199', email: 'dzhum@gmail.com' },
	])

	const addContact = contact => {
		contact.id = contact.length + 1
		setContacts([...contacts, contact])
	}

	return (
		<div>
			<header className='text-6xl font-semi-bold font-mono text-center py-4 '>
				Contact Book
			</header>
			<AddContact addContact={addContact} />
			<ContactList />
		</div>
	)
}

export default Home
