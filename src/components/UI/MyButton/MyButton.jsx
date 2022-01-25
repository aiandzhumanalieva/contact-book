import React from 'react'

const MyButton = ({ children, onClick, onPress }) => {
	return (
		<button
			className='w-32 ml-4 border-2 border-solid border-violet-300 rounded-xl my-3 text-violet-300 align-center'
			onClick={onClick}
			onPress={onPress}
		>
			{children}
		</button>
	)
}

export default MyButton
