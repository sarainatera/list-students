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

export type FormInputs = {
	searchNameInput: string;
};
