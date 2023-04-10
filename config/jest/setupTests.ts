import '@testing-library/jest-dom'
import 'node-fetch'
import 'jest-fetch-mock'

const observe = jest.fn()
const unobserve = jest.fn()

window.IntersectionObserver = jest.fn(() => ({
    observe,
    unobserve,
})) as any
