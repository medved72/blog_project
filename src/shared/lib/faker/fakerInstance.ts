import { faker } from '@faker-js/faker'

const resetFaker = () => {
    faker.seed(1)
}

resetFaker()

export { faker, resetFaker }
