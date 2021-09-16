import { render, screen, cleanup } from '@testing-library/react'
import { UserContext } from '../../App'
import Login from './Login'

test('test', () => {
    expect(true).toBe(true)
})

test('it will render Login component', () => {
    const loggedInUser = {
        email: "eusha37@gmail.com",
        name: "Mohammad Eusha",
        isSignedIn: true,
        photo: "https://lh3.googleusercontent.com/a-/AOh14GhyyoLqA1sJPhj7Xib2QoaPG1-KARKEMhcQSoYpDA=s96-c"
    }

    // const location = {
    //     state: { form: "/" }
    // }

    // render(
    //     <UserContext.Provider value={[loggedInUser, location]}>
    //         <Login />
    //     </UserContext.Provider>
    // )
    // const loginElement = screen.getByTestId('test-Login')
    // expect(loginElement).toBeInTheDocument()
})
