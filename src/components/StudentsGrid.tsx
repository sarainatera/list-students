import React from 'react';
import { useFetchStudents } from '../hooks/useFetchStudents';

const StudentsGrid = () => {
	const { data: students } = useFetchStudents();
	const average = (grades: string[]) => {
		return grades.reduce((acc, grade) => acc + parseInt(grade), 0) / grades.length;
	};

	return (
		<>
			{students.map((student, index) => {
				return (
					<div key={index} className={`card ${index === students.length - 1 ? 'last-card' : ''}`}>
						<div className="card-img">
							<img src={student.pic} alt={`${student.firstName}'s pic`} />
						</div>
						<div className="card-body">
							<h1>{`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}</h1>
							<p>Email: {student.email}</p>
							<p>Company: {student.company}</p>
							<p>Skill: {student.skill}</p>
							<p>Average: {average(student.grades)}%</p>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default StudentsGrid;
