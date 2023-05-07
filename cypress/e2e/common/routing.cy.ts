describe('Роутинг', () => {
    describe('Пользователь авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.login('admin', '123')
            cy.visit('/')
            cy.url().should('equal', Cypress.config().baseUrl)
        })

        it('Переход на страницу профиля', () => {
            cy.login('admin', '123').then((body) => {
                cy.visit(`/profile/${body.id}`)
                cy.url().should(
                    'equal',
                    `${Cypress.config().baseUrl ?? ''}profile/${body.id}`
                )
                cy.contains('Профиль').should('exist')
            })
        })

        it('Переход на страницу со списком статей', () => {
            cy.login('admin', '123')
            cy.visit(`/articles`)
            cy.url().should(
                'equal',
                `${Cypress.config().baseUrl ?? ''}articles`
            )
            cy.contains('Сортировать ПО').should('exist')
        })
    })

    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/')
            cy.url().should('equal', Cypress.config().baseUrl)
        })

        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1')
            cy.url().should('equal', Cypress.config().baseUrl)
        })

        it('Переход на несуществующую страницу', () => {
            cy.visit('/random-page')
            cy.contains('Страница не найдена').should('be.visible')
        })

        it('Переход на страницу со списком статей', () => {
            cy.visit('/articles')
            cy.url().should('equal', Cypress.config().baseUrl)
        })
    })
})
