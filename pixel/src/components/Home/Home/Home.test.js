import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Home from './Home'
import { BrowserRouter as Router } from 'react-router-dom';

test('test', () => {
    expect(true).toBe(true)
})

test('it will render Home component', () => {
    render(<Router><Home /></Router>)
    const homeElement = screen.getByTestId('test-Home')
    expect(homeElement).toBeInTheDocument()
})

test('matches snapshot for Home', () => {
    const tree = renderer.create(<Router><Home /></Router>).toJSON()
    expect(tree).toMatchSnapshot()
})