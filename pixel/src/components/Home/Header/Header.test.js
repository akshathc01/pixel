import { render, screen, cleanup } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer'
import Header from './Header'

test('test', () => {
    expect(true).toBe(true)
})

test('it will render Header component', () => {
    render(<Router><Header /></Router>)
    const headerElement = screen.getByTestId('test-Header')
    expect(headerElement).toBeInTheDocument()
})

test('matches snapshot for Header', () => {
    const tree = renderer.create(<Router><Header /></Router>).toJSON()
    expect(tree).toMatchSnapshot()
})