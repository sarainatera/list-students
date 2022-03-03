import React from 'react';
import { useForm } from 'react-hook-form';
import { FormInputs } from '../models';

const SearchByName = ({
	setSearchNameValue,
}: {
	setSearchNameValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const { register, watch } = useForm<FormInputs>();
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	setSearchNameValue((state: string) => (state = watch('searchNameInput')));

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
