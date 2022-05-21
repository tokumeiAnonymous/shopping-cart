import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';


test('app initial render', () => {
    render(<App />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
})

/* testing the routes */
// test('full app navigation', async () => {

// })