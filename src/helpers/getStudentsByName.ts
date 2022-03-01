import { Student } from '../models';

export const getStudentsByName = (name: string, students: Array<Student>) => {
	name = name.toLocaleLowerCase();
	return students.filter(student =>
		`${student.firstName} ${student.lastName}`.toLocaleLowerCase().includes(name),
	);
};
