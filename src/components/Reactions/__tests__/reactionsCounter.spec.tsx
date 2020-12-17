import React from 'react'
import {render, screen} from '@testing-library/react'
import ReactionsCounter, {reactionType} from '../ReactionsCounter'

const fakeReactions: reactionType[] = [
  {
    type: 'like',
    users: [
      {
        firstName: 'Cristian',
        lastName: 'Vargas',
      },
      {
        firstName: 'Andres',
        lastName: 'Lozano',
      },
    ],
  },
  {
    type: 'love',
    users: [
      {
        firstName: 'Danilo',
        lastName: 'Caviedes',
      },
      {
        firstName: 'Jose',
        lastName: 'Perdomo',
      },
    ],
  },
]

describe('ReactionsCounter', () => {
  test('Render ok', () => {
    render(<ReactionsCounter reactions={fakeReactions} />)
  })

  test('should show reactions', () => {
    render(<ReactionsCounter reactions={fakeReactions} />)

    expect(screen.queryByAltText(/care icon/i)).not.toBeInTheDocument()
    expect(screen.getByAltText(/love icon/i)).toBeInTheDocument()
    expect(screen.getByAltText(/like icon/i)).toBeInTheDocument()
    expect(screen.getByTestId('counter')).toHaveTextContent('4')
  })
})
