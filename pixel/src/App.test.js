import { render, screen, cleanup } from '@testing-library/react'
import App from './App';

afterEach(() => {
    cleanup()
})

test('test', () => {
    expect(true).toBe(true)
})

test('it will render App component', () => {
    render(<App />)
    const appElement = screen.getByTestId('test-App')
    expect(appElement).toBeInTheDocument()
})