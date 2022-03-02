import { createContext } from 'react';
import { UpdateType } from '../models';

const defaultUpdate: UpdateType = () => '';

export const SearchContext = createContext({
	searchNameValue: '',
	setSearchNameValue: defaultUpdate,
});
