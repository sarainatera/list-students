export const average = (grades: string[]) => {
	return grades.reduce((acc, grade) => acc + parseInt(grade), 0) / grades.length;
};
