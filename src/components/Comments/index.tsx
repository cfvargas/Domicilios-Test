import React from 'react'
import {PostContext, PostContextType} from '../../contexts/Posts'
import {Box, Input, Publication, postType} from '../'

export interface CommentsProps {
  post: postType
}

const Comments = ({post}: CommentsProps) => {
  const [comment, setComment] = React.useState('')
  const {addComment} = React.useContext(PostContext) as PostContextType

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setComment(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addComment(post.id, comment)
    setComment('')
  }
  return (
    <Box appearance="lightGray">
      <Box.Body>
        {post.comments.map(comment => (
          <Publication align="row" key={comment.id} publication={comment} />
        ))}
        <form onSubmit={handleSubmit}>
          <Input
            required
            value={comment}
            onChange={handleChange}
            type="text"
            placeholder="Escribe un comentario"
          />
        </form>
      </Box.Body>
    </Box>
  )
}

export default Comments
