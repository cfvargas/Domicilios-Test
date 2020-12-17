import React from 'react'
import {render, screen} from '@testing-library/react'
import ReactionsCounter, {reactionType} from '../ReactionsCounter'

const fakeReactions: reactionType = {
  like: [
    {
      id: 'xxx-yyy',
      firstName: 'Cristian',
      lastName: 'Vargas',
    },
    {
      id: 'xxx-yyxy',
      firstName: 'Andres',
      lastName: 'Lozano',
    },
  ],
  love: [
    {
      id: 'xxx-yy',
      firstName: 'Danilo',
      lastName: 'Caviedes',
    },
    {
      id: 'xxx-yyxy',
      firstName: 'Jose',
      lastName: 'Perdomo',
    },
  ],
}

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
