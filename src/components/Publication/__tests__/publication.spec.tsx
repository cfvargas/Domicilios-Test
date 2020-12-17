import React from 'react'
import moment from 'moment'
import {render, screen} from '@testing-library/react'
import Publication, {publicationType} from '../'

const fakePublication: publicationType = {
  user: {
    firstName: 'Cristian',
    lastName: 'Vargas',
    picture: 'https://cristian-picture.png',
  },
  content: 'Mi primer publicación',
  created: new Date(),
}

describe('Publication', () => {
  test('Render ok', () => {
    render(<Publication publication={fakePublication} />)
  })

  test('should render publication information', () => {
    render(<Publication publication={fakePublication} />)

    expect(screen.getByText(/cristian vargas/i)).toBeInTheDocument()
    expect(
      screen.getByText(moment(fakePublication.created).fromNow()),
    ).toBeInTheDocument()
    expect(screen.getByText(fakePublication.content)).toBeInTheDocument()
    expect(screen.getByAltText(/cristian's avatar/i)).toHaveAttribute(
      'src',
      fakePublication.user.picture,
    )
  })
})
