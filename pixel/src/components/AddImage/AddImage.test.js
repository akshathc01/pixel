import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { useContext } from 'react'
import { UserContext } from '../../App'
import AddImage from './AddImage'
import { BrowserRouter as Router } from 'react-router-dom';

test('test', () => {
    expect(true).toBe(true)
})

test('it will render AddImage component', () => {
    const loggedInUser = {
        email: "eusha37@gmail.com",
        name: "Mohammad Eusha",
        isSignedIn: true,
        photo: "https://lh3.googleusercontent.com/a-/AOh14GhyyoLqA1sJPhj7Xib2QoaPG1-KARKEMhcQSoYpDA=s96-c"
    }

    render(
        <UserContext.Provider value={[loggedInUser]}>
            <Router> <AddImage /> </Router>
        </UserContext.Provider>

    )
    const addImageElement = screen.getByTestId('test-addImage')
    expect(addImageElement).toBeInTheDocument()
})

test('matches snapshot for AddImage', () => {
    const loggedInUser = {
        email: "eusha37@gmail.com",
        name: "Mohammad Eusha",
        isSignedIn: true,
        photo: "https://lh3.googleusercontent.com/a-/AOh14GhyyoLqA1sJPhj7Xib2QoaPG1-KARKEMhcQSoYpDA=s96-c"
    }
    const tree = renderer.create(
        <UserContext.Provider value={[loggedInUser]}>
            <Router> <AddImage /> </Router>
        </UserContext.Provider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
})