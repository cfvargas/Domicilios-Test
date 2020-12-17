import React from 'react'
import {render, screen} from '@testing-library/react'
import AddPost from '../'

describe('AddPost', () => {
  test('Render ok', () => {
    render(<AddPost />)

    expect(
      screen.getByPlaceholderText(/Escribe aquí tu estado/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /publicar/i})).toBeInTheDocument()
  })
})
