import React, { useState } from 'react';
import './App.css';

export default function App() {
	const [email, setEmail] = useState('');
	const [pass1, setPass1] = useState('');
	const [dob, setDob] = useState();

	const handleSubmit = e => {
		e.preventDefault();

		console.log({
			email,
			password: pass1,
			dob,
		});
	};

	return (
		<div className='App'>
			<div className='form-container'>
				<form onSubmit={handleSubmit}>
					<label>
						Parent Email
						<input
							type='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</label>

					<label>
						Password
						<input
							type='password'
							value={pass1}
							onChange={e => setPass1(e.target.value)}
							required
						/>
					</label>
					<label>
						Parent's Year of Birth
						<input
							type='text'
							value={dob}
							onChange={e => setDob(e.target.value)}
							required
						/>
					</label>
					<button id='submit'>Submit</button>
				</form>
			</div>
		</div>
	);
}
