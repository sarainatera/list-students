import React, { ChangeEvent } from 'react';

const SearchByName = ({
	setSearchNameValue,
}: {
	setSearchNameValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchNameValue(e.target.value);
	};

	return (
		<form className="search-student" onSubmit={event => handleSubmit(event)}>
			<input
				type="text"
				placeholder="Search by name"
				autoComplete="off"
				className="search-input"
				onChange={event => handleInputChange(event)}
			/>
		</form>
	);
};

export default SearchByName;
