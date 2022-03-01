import React, { useMemo, useState } from 'react';
import SearchByName from './components/SearchByName';
import StudentsGrid from './components/StudentsGrid';
import { SearchContext } from './search/SearchContext';

function StudentsListApp() {
	const [searchNameValue, setSearchNameValue] = useState('');
	const value = useMemo(() => ({ searchNameValue, setSearchNameValue }), [searchNameValue]);

	return (
		<div className="card-grid">
			<SearchContext.Provider value={value}>
				<SearchByName />
				<StudentsGrid />
			</SearchContext.Provider>
		</div>
	);
}

export default StudentsListApp;
