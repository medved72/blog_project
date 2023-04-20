import '@testing-library/jest-dom'
import 'node-fetch'
import 'jest-fetch-mock'

const observe = jest.fn()
const unobserve = jest.fn()

window.IntersectionObserver = jest.fn(() => ({
    observe,
    unobserve,
})) as any

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
})
