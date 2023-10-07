import { screen, fireEvent } from '@testing-library/react';
import Counter from "./Counter";
import {renderWithRedux} from "../../test/helpers/renderWithRedux";

describe('Counter test', () => {
    test('Test router', async () => {
        renderWithRedux(
            <Counter/>
        )
        const incrementBtn = screen.getByTestId('increment-btn')
        expect(screen.getByTestId('counter-value')).toHaveTextContent('0')
        fireEvent.click(incrementBtn)
        expect(screen.getByTestId('counter-value')).toHaveTextContent('1')
    })
})