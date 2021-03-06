import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [user, setUser] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<div className="mb-3">
			<label className='form-label'>Name</label>
			<input className='form-control' type="text" name="name" value={user.name} onChange={handleInputChange} />
			</div>
			<div className="mb-3">
			<label className='form-label'>Username</label>
			<input className='form-control' type="text" name="username" value={user.username} onChange={handleInputChange} />
			</div>
			<button className='btn btn-success'>Add new user</button>
		</form>
	)
}

export default AddUserForm
