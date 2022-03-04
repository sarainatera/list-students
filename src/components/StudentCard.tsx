import React, { useState } from 'react';
import { average } from '../helpers/average';
import { Student } from '../models/index';
import TagInput from './TagInput';

const StudentCard = ({
	student,
	studentsLength,
	index,
	setStudents,
}: {
	student: Student;
	studentsLength: number;
	index: number;
	setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}) => {
	const [isShow, setIsShow] = useState(false);

	const Grades = (student: Student) => {
		return student.grades.map((grade, index) => {
			return (
				<p key={index} className={`${index === 0 && 'grades'}`}>{`Test ${index + 1}: ${grade}%`}</p>
			);
		});
	};

	return (
		<div className={`card ${index === studentsLength - 1 ? 'last-card' : ''}`}>
			<div className="card-img">
				<img src={student.pic} alt={`${student.firstName}'s pic`} />
			</div>
			<div className="card-body">
				<h1>{`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}</h1>
				<p>Email: {student.email}</p>
				<p>Company: {student.company}</p>
				<p>Skill: {student.skill}</p>
				<p>Average: {average(student.grades)}%</p>
				{isShow && Grades(student)}
				<div className="tags-container">
					{student.tags?.map((tag, index) => {
						return (
							<span key={index} className="tag">
								{tag}
							</span>
						);
					})}
				</div>
				<TagInput student={student} setStudents={setStudents} />
			</div>
			<button className="toggle-button" onClick={() => setIsShow(!isShow)}>
				<span className={`toggle-button-plus ${isShow && 'active'}`}></span>
				<span className="toggle-button-minus"></span>
			</button>
		</div>
	);
};

export default StudentCard;
