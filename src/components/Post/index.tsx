import React from 'react'
import styled from 'styled-components'
import {Box, Publication, publicationType} from '../'

export interface PostProps {
  post: publicationType
}

const Post = ({post}: PostProps) => (
  <Post.Element>
    <Box>
      <Box.Body>
        <Publication publication={post} />
      </Box.Body>
    </Box>
  </Post.Element>
)

Post.Element = styled.article``

export default Post
