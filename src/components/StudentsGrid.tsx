import React from 'react';
import { useFetchGifs } from '../hooks/useFetchStudents';

const StudentsGrid = () => {
	const { data: students } = useFetchGifs();
	const average = (grades: string[]) => {
		return grades.reduce((acc, grade) => acc + parseInt(grade), 0) / grades.length;
	};

	return (
		<>
			<div>
				{students.map(student => {
					return (
						<div key={student.id}>
							<img src={student.pic} alt={`${student.firstName}'s pic`} />
							<h1>{student.firstName}</h1>
							<p>Email: {student.email}</p>
							<p>Company: {student.company}</p>
							<p>Skill: {student.skill}</p>
							<p>Average: {average(student.grades)}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default StudentsGrid;
