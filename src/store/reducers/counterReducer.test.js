import counterReducer, {decrement, increment} from "./counterReducer";

describe('', () => {
    test('increment', () => {
      expect(counterReducer({value: 0}, increment())).toEqual({value: 1})
    })

    test('increment', () => {
        expect(counterReducer({value: 0}, decrement())).toEqual({value: -1})
    })

    test('increment', () => {
        expect(counterReducer(undefined, increment())).toEqual({value: 1})
        expect(counterReducer(undefined, decrement())).toEqual({value: -1})
    })
})