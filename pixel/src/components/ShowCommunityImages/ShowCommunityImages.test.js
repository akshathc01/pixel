import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ShowCommunityImages from './ShowCommunityImages'

afterEach(() => {
    cleanup()
})

test('test', () => {
    expect(true).toBe(true)
})

test('it will render ShowCommunityImages component', () => {
    const image = { _id: 1, imageName: '8c5dc61b7c71444ca37bc342020e7891.jpg', url: 'https://firebasestorage.googleapis.com/v0/b/pixel-image-uploader.appspot.com/o/images%2F8c5dc61b7c71444ca37bc342020e7891.jpg?alt=media&token=4fbf17bd-e125-4536-a02b-1f40518dbdcd', email: 'pixel@gmail.com', title: 'Sleeping Cat' }

    render(<ShowCommunityImages image={image} />)
    const showCommunityImagesElement = screen.getByTestId('test-ShowCommunityImages')
    expect(showCommunityImagesElement).toBeInTheDocument()
})

test('matches snapshot for ShowCommunityImages', () => {
    const image = { _id: 1, imageName: '8c5dc61b7c71444ca37bc342020e7891.jpg', url: 'https://firebasestorage.googleapis.com/v0/b/pixel-image-uploader.appspot.com/o/images%2F8c5dc61b7c71444ca37bc342020e7891.jpg?alt=media&token=4fbf17bd-e125-4536-a02b-1f40518dbdcd', email: 'pixel@gmail.com', title: 'Sleeping Cat' }

    const tree = renderer.create(<ShowCommunityImages image={image} />).toJSON()
    expect(tree).toMatchSnapshot()
})