import React from 'react';
import './ListItem.css';

const ListItem = ({
	id,
	avatar,
	last_name,
	first_name,
	selected,
	setSelected,
}) => {
	const userChecked = selected.indexOf(id) > -1;

	const handleChecked = () => {
		userChecked && setSelected(selected.filter((user) => user !== id));
		!userChecked && setSelected([...selected, id]);
	};

	return (
		<div className='userWrapper' key={id}>
			<div className='avatar'>
				<img src={avatar} alt='avatar' />
			</div>
			<div className='userName'>
				<span>{first_name}</span>
				<span>{last_name}</span>
			</div>
			<div className='checkboxWrapper'>
				<input
					className='userCheckbox'
					type='checkbox'
					checked={userChecked}
					onChange={() => handleChecked()}
				/>
			</div>
		</div>
	);
};

export default ListItem;
