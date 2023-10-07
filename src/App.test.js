import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


describe('TEST  APP', () => {
    test('render btn input', () => {
        render(<App />);
        const helloWorldElement = screen.getByText(/hello world/i);
        const btn = screen.getByRole('button');
        const input = screen.getByPlaceholderText(/инпут/i);
        expect(helloWorldElement).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
        expect(input).toMatchSnapshot();
    });

    // queryByText проверка что такого элемента на странице нет
    test('queryByText', () => {
        render(<App />);
        const notElement = screen.queryByText(/hello12/i);
        expect(notElement).toBeNull();
    });

    // findByText для работы с асинхронным кодом
    test('findByText', async () => {
        render(<App />);
        const dataTextElement = await screen.findByText(/data/i);
        expect(dataTextElement).toBeInTheDocument();
        expect(dataTextElement).toHaveStyle({color: 'red'});
    });

    test('clickEvent', async () => {
        render(<App />);
        const btn = screen.getByTestId('toggle-btn');

        expect(screen.queryByTestId('toggle-div')).toBeNull()
        // искусственное событие
        fireEvent.click(btn)
        expect(screen.queryByTestId('toggle-div')).toBeInTheDocument()

        // искусственное событие
        fireEvent.click(btn)
        expect(screen.queryByTestId('toggle-div')).toBeNull()
    });

    test('inputEvent', async () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/инпут/i);
        expect(screen.queryByTestId('value-elem')).toContainHTML('')

        // искусственное событие
        // fireEvent.input(input, {
        //     target: {
        //         value: '1111'
        //     }
        // })

        // не работает с конкретным событием, а воспроизводит действия пользователей
        userEvent.type(input, '1111')
        expect(screen.queryByTestId('value-elem')).toContainHTML('1111')

    });
})
