import React from 'react'
import styled from 'styled-components'
import {Box, Publication, Reactions, Button, Input, publicationType} from '../'

export type postType = publicationType & {
  comments: publicationType[]
}

export interface PostProps {
  post: postType
}

const Post = ({post}: PostProps) => {
  const [showComments, setShowComments] = React.useState(false)

  return (
    <Post.Element>
      <Box>
        <Box.Body>
          <Publication publication={post} />
          <Reactions handleReactionClick={console.log} />
          <Button
            onClick={() => setShowComments(!showComments)}
            appearance="secondary"
          >
            Comentar
          </Button>
        </Box.Body>
      </Box>
      {showComments ? (
        <Box>
          <Box.Body>
            {post.comments.map(comment => (
              <Publication key={comment.id} publication={comment} />
            ))}
            <Input type="text" placeholder="Escribe un comentario" />
          </Box.Body>
        </Box>
      ) : null}
    </Post.Element>
  )
}

Post.Element = styled.article``

export default Post
