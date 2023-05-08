import { Country } from '../../../const/country'
import { Currency } from '../../../const/currency'
import { faker } from '../fakerInstance'
import { type DatabaseProfile } from './db.dto'

const currencies = Object.values(Currency)
const countries = Object.values(Country)

export const generateProfile = (): DatabaseProfile => {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const username = `${firstName}.${lastName}`.toLowerCase()

    return {
        id: faker.datatype.uuid(),
        first: firstName,
        lastname: lastName,
        age: faker.datatype.number({ min: 18, max: 65 }),
        currency:
            currencies[
                faker.datatype.number({ min: 0, max: currencies.length - 1 })
            ],
        country:
            countries[
                faker.datatype.number({ min: 0, max: countries.length - 1 })
            ],
        city: faker.address.cityName(),
        username,
        avatar: faker.image.avatar(),
    }
}
