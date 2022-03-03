import React from 'react';
import { useFetchStudents } from '../hooks/useFetchStudents';
import { getStudentsByName } from '../helpers/getStudentsByName';
import StudentCard from './StudentCard';

const StudentsGrid = ({ searchNameValue }: { searchNameValue: string }) => {
	const { data: students } = useFetchStudents();
	const filteredStudents = getStudentsByName(searchNameValue, students);

	return (
		<>
			{filteredStudents.map((student, index) => {
				return <StudentCard key={index} {...student} studentsLength={students.length} {...index} />;
			})}
		</>
	);
};

export default StudentsGrid;
