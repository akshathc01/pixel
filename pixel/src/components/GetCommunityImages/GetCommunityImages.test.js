import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import GetCommunityImages from "./GetCommunityImages"


afterEach(() => {
    cleanup()
})

test('test', () => {
    expect(true).toBe(true)
})

test('it will render GetCommunityImages component', () => {
    render(<GetCommunityImages />)
    const getCommunityImagesElement = screen.getByTestId('test-getCommunityImages')
    expect(getCommunityImagesElement).toBeInTheDocument()
})


test('matches snapshot for GetCommunityImages', () => {
    const tree = renderer.create(<GetCommunityImages />).toJSON()
    expect(tree).toMatchSnapshot()
})