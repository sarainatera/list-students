import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Student } from '../models/index';

const TagInput = ({
	student,
	setStudents,
}: {
	student: Student;
	setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (inputValue.trim() === '') return;

		setStudents(students => {
			const newStudents = students.map(studentFromState => {
				if (studentFromState.id === student.id) {
					studentFromState.tags
						? (studentFromState.tags = [...studentFromState.tags, inputValue])
						: (studentFromState.tags = [inputValue]);
				}
				return studentFromState;
			});
			return newStudents;
		});
		setInputValue('');
	};

	return (
		<form onSubmit={event => handleSubmit(event)}>
			<input
				type="text"
				value={inputValue}
				className="tag-input"
				placeholder="Add a tag"
				onChange={event => handleInputChange(event)}
			></input>
		</form>
	);
};

export default TagInput;
