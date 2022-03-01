import React, { useContext, useMemo } from 'react';
import { useFetchStudents } from '../hooks/useFetchStudents';
import { SearchContext } from '../search/SearchContext';
import { getStudentsByName } from '../helpers/getStudentsByName';

const StudentsGrid = () => {
	const { data: students } = useFetchStudents();
	const { searchNameValue } = useContext(SearchContext);
	const average = (grades: string[]) => {
		return grades.reduce((acc, grade) => acc + parseInt(grade), 0) / grades.length;
	};

	const filteredStudents = useMemo(
		() => getStudentsByName(searchNameValue, students),
		[searchNameValue, students],
	);

	return (
		<>
			{filteredStudents.map((student, index) => {
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
