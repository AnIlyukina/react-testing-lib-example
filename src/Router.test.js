import {fireEvent, render, screen} from "@testing-library/react";
// import userEvent from '@testing-library/user-event';
import App from "./App";
import { MemoryRouter} from 'react-router-dom'

describe('TEST ROUTERS', () => {
    test('Router test', async () => {
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        );
        fireEvent.click(screen.getByTestId('about-link'))
        expect(screen.getByTestId('about-page')).toBeInTheDocument()

        fireEvent.click(screen.getByTestId('main-link'));
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })

    test('Error page test', async () => {
        render(
            <MemoryRouter initialEntries={['/asdedewfewf']}>
                <App/>
            </MemoryRouter>
        );
        expect(screen.getByTestId('error-page')).toBeInTheDocument()
    })
})
