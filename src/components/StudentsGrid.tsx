import React, { useContext, useMemo } from 'react';
import { useFetchStudents } from '../hooks/useFetchStudents';
import { SearchContext } from '../search/SearchContext';
import { getStudentsByName } from '../helpers/getStudentsByName';
import StudentCard from './StudentCard';

const StudentsGrid = () => {
	const { data: students } = useFetchStudents();
	const { searchNameValue } = useContext(SearchContext);

	const filteredStudents = useMemo(
		() => getStudentsByName(searchNameValue, students),
		[searchNameValue, students],
	);

	return (
		<>
			{filteredStudents.map((student, index) => {
				return <StudentCard key={index} {...student} studentsLength={students.length} {...index} />;
			})}
		</>
	);
};

export default StudentsGrid;
