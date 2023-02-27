import { classNames } from './classNames'

describe('classNames', () => {
    it('with only first param', () => {
        expect(classNames('root')).toBe('root')
    })

    it('with mods', () => {
        expect(
            classNames('root', {
                mod: true,
                mod1: false,
                mod2: true,
            })
        ).toBe('root mod mod2')
    })

    it('with mods and additional', () => {
        expect(
            classNames(
                'root',
                {
                    mod: true,
                    mod1: false,
                    mod2: true,
                },
                ['add1', false, '', 'add2']
            )
        ).toBe('root mod mod2 add1 add2')
    })

    it('with mods and additional', () => {
        expect(
            classNames(
                'root',
                {
                    mod: true,
                    mod2: true,
                },
                ['add1', false, '', 'add2']
            )
        ).toBe('root mod mod2 add1 add2')
    })
})
