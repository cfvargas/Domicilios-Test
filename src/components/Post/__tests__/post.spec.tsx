import React from 'react'
import moment from 'moment'
import {render, screen} from '@testing-library/react'
import Post, {postType} from '..'

const fakePost: postType = {
  user: {
    firstName: 'Cristian',
    lastName: 'Vargas',
    picture: 'https://cristian-picture.png',
  },
  content: 'Mi primer publicación',
  created: new Date(),
}

describe('Post', () => {
  test('Render ok', () => {
    render(<Post post={fakePost} />)
  })

  test('should render post information', () => {
    render(<Post post={fakePost} />)

    expect(screen.getByText(/cristian vargas/i)).toBeInTheDocument()
    expect(
      screen.getByText(moment(fakePost.created).fromNow()),
    ).toBeInTheDocument()
    expect(screen.getByText(fakePost.content)).toBeInTheDocument()
    expect(screen.getByAltText(/cristian's avatar/i)).toHaveAttribute(
      'src',
      fakePost.user.picture,
    )
  })
})
