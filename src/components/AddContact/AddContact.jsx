import React, { useState } from 'react'
import MyButton from '../UI/MyButton/MyButton'
import MyInput from '../UI/MyInput/MyInput'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GoPerson } from 'react-icons/go'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { MdAddAPhoto } from 'react-icons/md'

const AddContact = ({ props }) => {
	const [contact, setContact] = useState({
		id: null,
		name: '',
		number: '',
		email: '',
	})
	const [name, setName] = useState('')
	const [number, setNumber] = useState('')
	const [email, setEmail] = useState('')

	const postData = () => {
		console.log(name)
		console.log(number)
		console.log(email)
	}
	const handleInputChange = e => {
		const { name, value } = e.currentTarget
		setName({ ...name, [name]: value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (!name || !number || !email) return
		props.AddContact()
		setContact(contact)
	}

	return (
		<form
		// onSubmit={handleSubmit}
		>
			<div className='w-3/12 border-solid border-2 rounded-3xl bg-violet-200 outline-none mx-20 my-7 flex flex-col items-center'>
				<h3 className='border-solid rounded-xl bg-violet-300 text-xl text- mt-3 self-center w-48 text-center h-8 '>
					Create Contact
				</h3>
				<div className='text-lg font-semibold font-mono border-2 border-solid outline-none rounded-3xl max-w-sm w-full my-4 flex flex-col items-center bg-violet-100'>
					<div className='flex flex-col items-center'>
						<MdAddAPhoto className='w-8 h-8' />
						<MyButton>Add Photo</MyButton>
					</div>
					<div className='flex flex-col w-52 '>
						<div className='flex justify-between items-center'>
							<GoPerson className='' />
							<MyInput
								type='text'
								name='name'
								placeholder='Enter name'
								onChange={e => setName(e.target.value)}
							/>
						</div>
						<div className='flex justify-between items-center'>
							<BsFillTelephoneFill />
							<MyInput
								type='tel'
								name='number'
								placeholder='Enter phone number'
								onChange={e => setNumber(e.target.value)}
							/>
						</div>
						<div className='flex justify-between items-center'>
							<MdOutlineAlternateEmail />
							<MyInput
								type='email'
								name='email'
								placeholder='Enter email'
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<div>
						<MyButton onClick={postData}>Save</MyButton>
						<MyButton>Cancel</MyButton>
					</div>
				</div>
			</div>
			;
		</form>
	)
}

export default AddContact
