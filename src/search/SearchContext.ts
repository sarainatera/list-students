import { createContext } from 'react';
import { SearchContextProps } from '../models';

export const SearchContext = createContext({
	searchNameValue: '',
	setSearchNameValue: () => {},
} as SearchContextProps);
