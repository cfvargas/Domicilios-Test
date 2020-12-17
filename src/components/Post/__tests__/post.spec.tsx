import React from 'react'
import moment from 'moment'
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import Post, {postType} from '..'

const fakeComment = {
  id: 'xxx-yyy-zzz',
  user: {
    firstName: 'Cristian',
    lastName: 'Vargas',
    picture:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.0-9/129953134_10221344432593788_6349793943326329587_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=4iJkllzunwUAX9EPuPW&_nc_ht=scontent.fbog4-1.fna&oh=c520abba32a59eb63a3d036be33ea0a1&oe=6000C1C1',
  },
  content: 'Mi primer comentario',
  created: new Date(),
}

const fakePost: postType = {
  user: {
    firstName: 'Cristian',
    lastName: 'Vargas',
    picture: 'https://cristian-picture.png',
  },
  content: 'Mi primer publicación',
  comments: [
    {...fakeComment},
    {
      ...fakeComment,
      content: 'Segundo comentario',
      id: 'yyy-xxx-zzz',
      user: {...fakeComment.user, firstName: 'Andres'},
    },
  ],
  created: new Date(),
}

describe('Post', () => {
  test('Render ok', () => {
    render(<Post post={fakePost} />)

    expect(
      screen.queryByPlaceholderText(/escribe un comentario/i),
    ).not.toBeInTheDocument()
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

  test('hide reactions when click on icon', () => {
    render(<Post post={fakePost} />)

    const button = screen.getByRole('button', {name: /reaccionar/i})
    user.hover(button)

    const likeButton = screen.getByRole('button', {name: /like/i})
    user.click(likeButton)

    expect(screen.queryByAltText(/like/i)).not.toBeInTheDocument()
    expect(screen.queryByAltText(/love/i)).not.toBeInTheDocument()
    expect(screen.queryByAltText(/care/i)).not.toBeInTheDocument()
  })

  test('show comments', () => {
    render(<Post post={fakePost} />)

    const commentButton = screen.getByRole('button', {name: /comentar/i})
    // click to show comments
    user.click(commentButton)

    expect(
      screen.getByPlaceholderText(/escribe un comentario/i),
    ).toBeInTheDocument()
    expect(screen.getByText(/mi primer comentario/i)).toBeInTheDocument()
    expect(screen.getByText(/segundo comentario/i)).toBeInTheDocument()

    // click to hide comments
    user.click(commentButton)

    expect(screen.queryByText(/mi primer comentario/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/segundo comentario/i)).not.toBeInTheDocument()
    expect(
      screen.queryByPlaceholderText(/escribe un comentario/i),
    ).not.toBeInTheDocument()
  })
})
