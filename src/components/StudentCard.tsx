import React, { useState } from 'react';
import { Student } from '../models/index';

const StudentCard = (student: Student, studentLength: number, index: number) => {
	const [isShow, setIsShow] = useState(false);

	const showGrades = (student: Student) => {
		return student.grades.map((grade, index) => {
			return (
				<div key={index} className={`${index === 0 && 'grades'}`}>
					<p key={index}>{`Test ${index + 1}: ${grade}%`}</p>
				</div>
			);
		});
	};

	const average = (grades: string[]) => {
		return grades.reduce((acc, grade) => acc + parseInt(grade), 0) / grades.length;
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
				{isShow && showGrades(student)}
			</div>
			<button className="toggle-button" onClick={() => setIsShow(!isShow)}>
				<span className={`toggle-button-plus ${isShow && 'active'}`}></span>
				<span className="toggle-button-minus"></span>
			</button>
		</div>
	);
};

export default StudentCard;
