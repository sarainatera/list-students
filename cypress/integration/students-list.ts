import cypress from 'cypress';

describe('Students List App', () => {
	it('It shows the students', () => {
		cy.visit('');
		cy.request('https://api.hatchways.io/assessment/students').then(resp => {
			resp.body.students.forEach(student => {
				cy.contains(student.firstName.toLocaleUpperCase());
			});
		});
	});

	it('Filter by name', () => {
		cy.get('.search-input').eq(0).type('Clarke');
		cy.contains('CLARKE').should('be.visible');
		cy.get('.card').contains('LAURENS').should('not.exist');
	});

	it('Filter by tag', () => {
		cy.reload();
		cy.get('.tag-input').eq(0).type('tag1 {enter}');
		cy.get('.tag-input').eq(1).type('tag2 {enter}');
		cy.get('.tag').contains('tag1').scrollIntoView().should('be.visible');
		cy.get('.tag').contains('tag2').should('be.visible');
		cy.get('.search-input').eq(1).type('tag1');
		cy.get('.card').contains('tag1').should('exist');
		cy.get('.card').contains('tag2').should('not.exist');
	});
});
