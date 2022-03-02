export interface Student {
	city: string;
	company: string;
	email: string;
	firstName: string;
	grades: Array<string>;
	id: string;
	lastName: string;
	pic: string;
	skill: string;
}

export interface StateProperties {
	data: Array<Student>;
}

export interface InitialFormState {
	searchNameInput: string;
}

export type FormInputs = {
	searchNameInput: string;
};

export type UpdateType = React.Dispatch<React.SetStateAction<string>>;
