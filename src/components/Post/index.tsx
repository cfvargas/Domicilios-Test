import React from 'react'
import styled from 'styled-components'
import {PostContext, PostContextType} from '../../contexts/Posts'
import colors from '../../config/colors'
import {
  Box,
  Publication,
  Reactions,
  Button,
  Comments,
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
  const {addReaction} = React.useContext(PostContext) as PostContextType
  const [showComments, setShowComments] = React.useState(false)

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
          <Post.CommentsLength onClick={() => setShowComments(!showComments)}>
            {post.comments.length}{' '}
            {post.comments.length === 1 ? 'comentario' : 'comentarios'}
          </Post.CommentsLength>
        </Box.Footer>
      </Box>
      {showComments ? <Comments post={post} /> : null}
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
