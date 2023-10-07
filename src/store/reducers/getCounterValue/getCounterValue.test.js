import {getCounterValue} from "./getCounterValue";

describe('getCounterValue', () => {
    test('c пустым значением', () => {
        expect(getCounterValue({})).toBe(0)
    })

    test('c заполненным значением', () => {
        expect(getCounterValue({
            counter: {
                value: 100
            }
        })).toBe(100)
    })

    test('c пустым значением', () => {
        expect(getCounterValue({})).toBe(0)
    })

    test('c пустым значением', () => {
        expect(getCounterValue({})).toBe(0)
    })
})