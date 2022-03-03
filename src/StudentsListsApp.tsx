import React, { useState } from 'react';
import SearchByName from './components/SearchByName';
import StudentsGrid from './components/StudentsGrid';

function StudentsListApp() {
	const [searchNameValue, setSearchNameValue] = useState('');

	return (
		<div className="card-grid">
			<SearchByName setSearchNameValue={setSearchNameValue} />
			<StudentsGrid searchNameValue={searchNameValue} />
		</div>
	);
}

export default StudentsListApp;
