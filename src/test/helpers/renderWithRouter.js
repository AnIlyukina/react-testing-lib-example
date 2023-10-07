import {MemoryRouter} from "react-router-dom";
import AppRouters from "../../router/AppRouters";
import { render } from '@testing-library/react';

export const renderWithRouter = (component, initialRoute = '/') => {
    return render (
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouters/>
            { component }
        </MemoryRouter>
    )
}

