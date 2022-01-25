import React from 'react'
import MyButton from '../../UI/MyButton/MyButton'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GoPerson } from 'react-icons/go'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import ContactInfo from '../ContactInfo/ContactInfo'
import { MdAddAPhoto } from 'react-icons/md'

const ContactItem = ({ name, number, email }) => {
	return (
		<div className='w-3/12 border rounded-3xl bg-violet-200 outline-none mx-20 my-7 flex flex-col items-center'>
			<h3 className='border-solid rounded-xl bg-violet-300 text-xl mt-3 self-center w-48 text-center h-8 '>
				Contact
			</h3>
			<div className=' font-mono border rounded-3xl max-w-sm w-full my-8  flex flex-col items-center bg-violet-100'>
				<MdAddAPhoto className='w-12 h-12' />

				<div
					//  key={contact.id}
					className='w-8/12'
				>
					<ContactInfo>
						<GoPerson />
						{name}
					</ContactInfo>
					<ContactInfo>
						<BsFillTelephoneFill />
						{number}
					</ContactInfo>
					<ContactInfo>
						<MdOutlineAlternateEmail />
						{email}
					</ContactInfo>
				</div>
				<div>
					<MyButton>Edit Contact</MyButton>
					<MyButton>Delete</MyButton>
				</div>
			</div>{' '}
		</div>
	)
}

export default ContactItem
