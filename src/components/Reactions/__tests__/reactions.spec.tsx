import React from 'react'
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import Reactions from '../'

const fakeCallback = jest.fn()

afterEach(() => {
  jest.clearAllMocks()
})

describe('Reactions', () => {
  test('Render ok', () => {
    render(<Reactions handleReactionClick={fakeCallback} />)
  })

  test('show button without icons', () => {
    render(<Reactions handleReactionClick={fakeCallback} />)

    expect(screen.queryByAltText(/like/i)).not.toBeInTheDocument()
    expect(screen.queryByAltText(/love/i)).not.toBeInTheDocument()
    expect(screen.queryByAltText(/care/i)).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', {name: /reaccionar/i}),
    ).toBeInTheDocument()
  })

  test('show reactions icons on hover', () => {
    render(<Reactions handleReactionClick={fakeCallback} />)

    const button = screen.getByRole('button', {name: /reaccionar/i})
    user.hover(button)

    expect(screen.getByAltText(/like/i)).toBeInTheDocument()
    expect(screen.getByAltText(/love/i)).toBeInTheDocument()
    expect(screen.getByAltText(/care/i)).toBeInTheDocument()
  })

  test('hide reactions when click on icon', () => {
    render(<Reactions handleReactionClick={fakeCallback} />)

    const button = screen.getByRole('button', {name: /reaccionar/i})
    user.hover(button)

    const likeButton = screen.getByRole('button', {name: /like/i})
    user.click(likeButton)

    expect(screen.queryByAltText(/like/i)).not.toBeInTheDocument()
    expect(screen.queryByAltText(/love/i)).not.toBeInTheDocument()
    expect(screen.queryByAltText(/care/i)).not.toBeInTheDocument()

    expect(fakeCallback).toBeCalledWith('like')
    expect(fakeCallback).toBeCalledTimes(1)
  })
})
