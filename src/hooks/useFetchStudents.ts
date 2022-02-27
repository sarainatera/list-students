import { useEffect, useState } from 'react';
import { getStudents } from '../helpers/getStudents';
import { StateProperties } from '../models';

export const useFetchStudents = () => {
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
