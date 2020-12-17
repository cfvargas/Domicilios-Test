import React from 'react'
import styled from 'styled-components'
import {PostContext, PostContextType} from '../../contexts/Posts'
import colors from '../../config/colors'
import {
  Box,
  Publication,
  Reactions,
  Button,
  Input,
  publicationType,
  reactionType,
} from '../'

export type postType = publicationType & {
  comments: publicationType[]
  reactions: reactionType
}

export interface PostProps {
  post: postType
}

const Post = ({post}: PostProps) => {
  const [comment, setComment] = React.useState('')
  const {addReaction, addComment} = React.useContext(
    PostContext,
  ) as PostContextType
  const [showComments, setShowComments] = React.useState(false)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setComment(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addComment(post.id, comment)
    setComment('')
  }

  return (
    <Post.Element>
      <Box>
        <Box.Body>
          <Publication publication={post} />
          <Reactions
            handleReactionClick={reactionType =>
              addReaction(post.id, reactionType)
            }
          />
          <Button
            onClick={() => setShowComments(!showComments)}
            appearance="secondary"
          >
            Comentar
          </Button>
        </Box.Body>
        <Box.Footer align="space-between">
          <Reactions.Counter reactions={post.reactions} />
          {post.comments.length ? (
            <Post.CommentsLength onClick={() => setShowComments(!showComments)}>
              {post.comments.length} comentarios
            </Post.CommentsLength>
          ) : (
            <span />
          )}
        </Box.Footer>
      </Box>
      {showComments ? (
        <Box appearance="lightGray">
          <Box.Body>
            {post.comments.map(comment => (
              <Publication align="row" key={comment.id} publication={comment} />
            ))}
            <form onSubmit={handleSubmit}>
              <Input
                value={comment}
                onChange={handleChange}
                type="text"
                placeholder="Escribe un comentario"
              />
            </form>
          </Box.Body>
        </Box>
      ) : null}
    </Post.Element>
  )
}

Post.Element = styled.article``
Post.CommentsLength = styled.button`
  border: none;
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
  color: ${colors.gray};
  outline: none;
`
export default Post
