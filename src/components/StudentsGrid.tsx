import React, { memo, useEffect, useState } from 'react';
import { getStudentsByFilter } from '../helpers/getStudentsByFilter';
import StudentCard from './StudentCard';
import { Student } from '../models/index';
import { getStudents } from '../helpers/getStudents';

const StudentsGrid = memo(
	({ searchNameValue, searchTagValue }: { searchNameValue: string; searchTagValue: string }) => {
		const [students, setStudents] = useState<Array<Student>>([]);

		useEffect(() => {
			getStudents().then(studentsFromApi => {
				setStudents(studentsFromApi);
			});
		}, []);
		const filteredStudents = getStudentsByFilter(searchNameValue, searchTagValue, students);

		return (
			<>
				{filteredStudents.map((student, index) => {
					return (
						<StudentCard
							key={index}
							student={student}
							index={index}
							studentsLength={students.length}
							setStudents={setStudents}
						/>
					);
				})}
			</>
		);
	},
);

export default StudentsGrid;
