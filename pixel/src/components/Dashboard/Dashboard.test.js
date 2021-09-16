import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { UserContext } from '../../App'
import Dashboard from './Dashboard'
import PrivateImg from './PrivateImg'
import PublicImg from './PublicImg'
import { BrowserRouter as Router } from 'react-router-dom';

test('test', () => {
    expect(true).toBe(true)
})

//unit testing and snapshot for dashboard
test('it will render Dashboard component', () => {
    const loggedInUser = {
        email: "pixel@gmail.com",
        name: "Pixel Uploader",
        isSignedIn: true,
        photo: "https://lh3.googleusercontent.com/a-/AOh14GhyyoLqA1sJPhj7Xib2QoaPG1-KARKEMhcQSoYpDA=s96-c"
    }

    render(
        <UserContext.Provider value={[loggedInUser]}>
            <Router>  <Dashboard />  </Router>
        </UserContext.Provider>)
    const dashboardElement = screen.getByTestId('test-Dashboard')
    expect(dashboardElement).toBeInTheDocument()
})

test('matches snapshot for dashboard', () => {
    const loggedInUser = {
        email: "pixel@gmail.com",
        name: "Mohammad Eusha",
        isSignedIn: true,
        photo: "https://lh3.googleusercontent.com/a-/AOh14GhyyoLqA1sJPhj7Xib2QoaPG1-KARKEMhcQSoYpDA=s96-c"
    }
    const tree = renderer.create(
        <UserContext.Provider value={[loggedInUser]}>
            <Router>  <Dashboard />  </Router>
        </UserContext.Provider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
})


//unit testing and snapshot for PrivateImg

test('it will render PrivateImg component', () => {
    const upload = { _id: 1, imageName: '8c5dc61b7c71444ca37bc342020e7891.jpg', url: 'https://firebasestorage.googleapis.com/v0/b/pixel-image-uploader.appspot.com/o/images%2F8c5dc61b7c71444ca37bc342020e7891.jpg?alt=media&token=4fbf17bd-e125-4536-a02b-1f40518dbdcd', email: 'eusha37@gmail.com', title: 'Sleeping Cat' }

    render(<PrivateImg upload={upload} />)
    const dashboardElement = screen.getByTestId('test-PrivateImg')
    expect(dashboardElement).toBeInTheDocument()
})


test('matches snapshot for privateImg', () => {
    const upload = { _id: 1, imageName: '8c5dc61b7c71444ca37bc342020e7891.jpg', url: 'https://firebasestorage.googleapis.com/v0/b/pixel-image-uploader.appspot.com/o/images%2F8c5dc61b7c71444ca37bc342020e7891.jpg?alt=media&token=4fbf17bd-e125-4536-a02b-1f40518dbdcd', email: 'eusha37@gmail.com', title: 'Sleeping Cat' }
    const tree = renderer.create(<PrivateImg upload={upload} />).toJSON()
    expect(tree).toMatchSnapshot()
})


//unit testing and snapshot for PublicImg
test('it will render PublicImg component', () => {
    const upload = { _id: 1, imageName: '8c5dc61b7c71444ca37bc342020e7891.jpg', url: 'https://firebasestorage.googleapis.com/v0/b/pixel-image-uploader.appspot.com/o/images%2F8c5dc61b7c71444ca37bc342020e7891.jpg?alt=media&token=4fbf17bd-e125-4536-a02b-1f40518dbdcd', email: 'eusha37@gmail.com', title: 'Sleeping Cat' }

    render(<PublicImg upload={upload} />)
    const dashboardElement = screen.getByTestId('test-PublicImg')
    expect(dashboardElement).toBeInTheDocument()
})


test('matches snapshot for publicImg', () => {
    const upload = { _id: 1, imageName: '8c5dc61b7c71444ca37bc342020e7891.jpg', url: 'https://firebasestorage.googleapis.com/v0/b/pixel-image-uploader.appspot.com/o/images%2F8c5dc61b7c71444ca37bc342020e7891.jpg?alt=media&token=4fbf17bd-e125-4536-a02b-1f40518dbdcd', email: 'eusha37@gmail.com', title: 'Sleeping Cat' }
    const tree = renderer.create(<PublicImg upload={upload} />).toJSON()
    expect(tree).toMatchSnapshot()
})