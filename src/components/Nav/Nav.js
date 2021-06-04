import React, { useState } from 'react';
import './Nav.css';

const Nav = ({
	usersAmount,
	setUsersAmount,
	list,
	setList,
	setSearchUser,
	fetchList,
}) => {
	const [phrase, setPhrase] = useState('');
	console.log(phrase);

	const searchByPhrase = () => {
		const filteredByLastName = list.filter((user) => user.last_name === phrase);
		console.log(filteredByLastName);

		if (filteredByLastName.length !== 0) {
			setList(filteredByLastName);
		} else {
			const filteredByFirstName = list.filter(
				(user) => user.first_name === phrase
			);
			if (filteredByFirstName.length !== 0) {
				setList(filteredByFirstName);
			} else {
				setSearchUser(true);
				setList(null);
			}
		}
	};

	const clearList = () => {
		setSearchUser(false);
		setPhrase('');
		fetchList();
	};

	return (
		<nav>
			<div className='usersAmount'>
				<p>Users to schow in the list :</p>
				<input
					type='number'
					value={usersAmount}
					onChange={(e) => setUsersAmount(e.target.value)}
					min='1'
				/>
			</div>
			<div className='searchInput'>
				<div>
					<p>Search users by last name or first name :</p>
					<input
						type='text'
						value={phrase}
						onChange={(e) => setPhrase(e.target.value)}
						placeholder='serach...'
					/>
				</div>
				<div>
					<button onClick={() => searchByPhrase()}>Search</button>
					<button onClick={() => clearList()}>Clear</button>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
