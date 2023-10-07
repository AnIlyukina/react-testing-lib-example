import { render } from '@testing-library/react';
import Counter from "./Counter";

describe('Counter test', () => {
    test('Test router', async () => {
        const { getByTestId } = render(<Counter/>)
        const incrementBtn = getByTestId('increment-btn')
        expect(getByTestId('value-title')).toHaveTextContent('0')
    })
})