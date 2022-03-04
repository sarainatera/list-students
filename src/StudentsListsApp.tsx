import React, { memo, useState } from 'react';
import SearchByName from './components/SearchByName';
import SearchByTag from './components/SearchByTag';
import StudentsGrid from './components/StudentsGrid';

const StudentsListApp = memo(() => {
	const [searchNameValue, setSearchNameValue] = useState('');
	const [searchTagValue, setSearchTagValue] = useState('');

	return (
		<div className="card-grid">
			<SearchByName setSearchNameValue={setSearchNameValue} />
			<SearchByTag setSearchTagValue={setSearchTagValue} />
			<StudentsGrid searchNameValue={searchNameValue} searchTagValue={searchTagValue} />
		</div>
	);
});

export default StudentsListApp;
