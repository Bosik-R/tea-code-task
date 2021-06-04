import { useState, useEffect } from 'react';
import './App.css';
import ListItem from './components/ListItem/ListItem';
import Nav from './components/Nav/Nav';
import { sortOn } from './utils/sortOn';

const App = () => {
	const [list, setList] = useState(null);
	const [usersAmount, setUsersAmount] = useState(30);
	const [selected, setSelected] = useState([]);
	const [searchUser, setSearchUser] = useState(false);

	console.log('id of selected users', selected);

	const fetchList = async () => {
		const url =
			'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json';

		const response = await fetch(url);
		const data = await response.json();
		const shortList = data.filter((user) => data.indexOf(user) < usersAmount);

		const newList = shortList.sort(sortOn('last_name'));

		setList(newList);
	};

	useEffect(() => {
		fetchList();
	}, [usersAmount]);

	return (
		<div className='container'>
			<header>
				<Nav
					usersAmount={usersAmount}
					setUsersAmount={setUsersAmount}
					list={list}
					setList={setList}
					setSearchUser={setSearchUser}
					fetchList={fetchList}
				/>
			</header>
			{searchUser && <h1>user not found</h1>}
			{list && (
				<section>
					{list.map((user) => (
						<ListItem
							key={user.id}
							{...user}
							selected={selected}
							setSelected={setSelected}
						/>
					))}
				</section>
			)}
		</div>
	);
};

export default App;
