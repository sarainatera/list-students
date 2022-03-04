import React, { ChangeEvent } from 'react';

const SearchByTag = ({
	setSearchTagValue,
}: {
	setSearchTagValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTagValue(e.target.value);
	};

	return (
		<form className="search-student" onSubmit={event => handleSubmit(event)}>
			<input
				type="text"
				placeholder="Search by tag"
				autoComplete="off"
				className="search-input"
				onChange={event => handleInputChange(event)}
			/>
		</form>
	);
};

export default SearchByTag;
