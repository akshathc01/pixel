import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Navbar from "./Navbar"
import { BrowserRouter as Router } from 'react-router-dom';

test('test', () => {
    expect(true).toBe(true)
})

test('it will render Navbar component', () => {
    render(<Router><Navbar /></Router>)
    const navbarElement = screen.getByTestId('test-Navbar')
    expect(navbarElement).toBeInTheDocument()
})

test('matches snapshot for Navbar', () => {
    const tree = renderer.create(<Router><Navbar /></Router>).toJSON()
    expect(tree).toMatchSnapshot()
})