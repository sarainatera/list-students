import { Student } from '../models';

export const getStudents = async (): Promise<Array<Student>> => {
	const url = 'https://api.hatchways.io/assessment/students';

	const resp = await fetch(url);
	const studentsResponse = await resp.json();
	const students: Array<Student> = studentsResponse.students;

	return students;
};
