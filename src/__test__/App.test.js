import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';


test('App initial render', () => {
    render(<App />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();

    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
})

describe('Testing app navigation', () => {
    beforeEach( () => {
        render(<App />);
    })
    test('should render homepage when "Home" is clicked',() => {
        const home = document.querySelector('#header--home');
        fireEvent.click(home);
        const main = document.querySelector('main');
        expect(main.className).toBe('home');
    })
    test('should render shop when "Shop" is clicked',() => {
        const shop = document.querySelector('#header--shop');
        fireEvent.click(shop);
        const main = document.querySelector('main');
        expect(main.className).toBe('shop');
    })
    test('should render cart when "Cart" is clicked',() => {
        const cart = document.querySelector('#header--cart');
        fireEvent.click(cart);
        const main = document.querySelector('main');
        expect(main.className).toBe('cart');;
    })
    test('should render account when "Account" is clicked',() => {
        const account = document.querySelector('#header--account');
        fireEvent.click(account);
        const main = document.querySelector('main');
        expect(main.className).toBe('account');
    })
})