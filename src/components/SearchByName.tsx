import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FormInputs } from '../models';
import { SearchContext } from '../search/SearchContext';

const SearchByName = () => {
	const { setSearchNameValue } = useContext(SearchContext);
	const { register, watch } = useForm<FormInputs>();
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	setSearchNameValue(state => (state = watch('searchNameInput')));

	return (
		<form className="search-student" onSubmit={event => onSubmit(event)}>
			<input
				{...register('searchNameInput')}
				type="text"
				placeholder="Search by name"
				autoComplete="off"
			/>
		</form>
	);
};

export default SearchByName;
