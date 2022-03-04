import { Student } from '../models';

export const getStudentsByFilter = (name: string, tag: string, students: Array<Student>) => {
	name = name.toLocaleLowerCase();
	return students.filter(student => {
		return (
			`${student.firstName} ${student.lastName}`.toLocaleLowerCase().includes(name) &&
			(!tag || student.tags?.some(studentTag => studentTag.includes(tag)))
		);
	});
};
