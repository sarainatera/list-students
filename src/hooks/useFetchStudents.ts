import { useEffect, useState } from 'react';
import { getStudents } from '../helpers/getStudents';
import { Student } from '../models';

export const useFetchGifs = () => {
	interface StateProperties {
		data: Array<Student>;
	}

	const [state, setState] = useState<StateProperties>({
		data: [],
	});

	useEffect(() => {
		getStudents().then(student => {
			setState({
				data: student,
			});
		});
	}, []);

	return state;
};
