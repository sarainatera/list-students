import React from 'react';
import { Student } from '../models/index';

const StudentCard = (student: Student, studentLength: number, index: number) => {
	const average = (grades: string[]) => {
		return grades.reduce((acc, grade) => acc + parseInt(grade), 0) / grades.length;
	};
	let isShow = false;
	// const showGrades = (student: Student) => {
	// 	return student.grades.map((grade, index) => {
	// 		return (
	// 			<p key={index}>
	// 				Test {index + 1}: {grade}%
	// 			</p>
	// 		);
	// 	});
	// };

	const showToggle = () => {
		isShow = !isShow;
		console.log(isShow);
	};

	return (
		<div className={`card ${index === studentLength - 1 ? 'last-card' : ''}`}>
			<div className="card-img">
				<img src={student.pic} alt={`${student.firstName}'s pic`} />
			</div>
			<div className="card-body">
				<h1>{`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}</h1>
				<p>Email: {student.email}</p>
				<p>Company: {student.company}</p>
				<p>Skill: {student.skill}</p>
				<p>Average: {average(student.grades)}%</p>

				{/* {isShow ? <div>Hola</div> : <div>Chao</div>} */}
				{(() => (isShow ? <div>Hola</div> : <div>Chao</div>))()}
			</div>
			<button className="toggle-button" onClick={showToggle}>
				+
			</button>
		</div>
	);
};

export default StudentCard;
