import { getQueryParams } from './addQueryParams'

describe('shared/url/addQueryParams', () => {
    it('test with one param', () => {
        const params = getQueryParams({
            test: 'value',
        })
        expect(params).toBe('?test=value')
    })

    it('test with multiple params', () => {
        const params = getQueryParams({
            test: 'value',
            second: '2',
        })
        expect(params).toBe('?test=value&second=2')
    })

    it('test with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined,
        })
        expect(params).toBe('?test=value')
    })
})
