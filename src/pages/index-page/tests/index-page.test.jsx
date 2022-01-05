import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { Provider } from "react-redux";
import { Store } from '../../../redux/store';
import { IndexPage } from '../index-page';

it('should render welcome message', () => {
    render(
        <Provider store={Store}>
            <IndexPage/>
        </Provider>
    );
    const message = "Welcome to Conjur!";
    expect(screen.queryByText(message)).toBeInTheDocument();
});
