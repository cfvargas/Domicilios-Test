import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import colors from '../../config/colors'
import {Box} from '../'

export type userType = {
  firstName: string
  lastName: string
  picture: string
}

export type postType = {
  user: userType
  content: string
  created: Date
}

export interface PostProps {
  post: postType
}

const Post = ({post}: PostProps) => (
  <Post.Element>
    <Box>
      <Box.Body>
        <Post.Body>
          <Post.Avatar>
            <img
              alt={`${post.user.firstName}'s avatar`}
              src={post.user.picture}
            />
          </Post.Avatar>
          <Post.Description>
            <div>
              <Post.UserName>{`${post.user.firstName} ${post.user.lastName}`}</Post.UserName>
              <Post.Created>{moment(post.created).fromNow()}</Post.Created>
            </div>
            <Post.Content>{post.content}</Post.Content>
          </Post.Description>
        </Post.Body>
      </Box.Body>
    </Box>
  </Post.Element>
)

Post.Element = styled.article``
Post.Body = styled.div`
  display: flex;
  align-items: flex-start;
`
Post.Avatar = styled.picture`
  min-width: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    max-width: 100%;
  }
`

Post.UserName = styled.span`
  font-weight: bold;
  color: ${colors.green};
`

Post.Created = styled.span`
  color: ${colors.gray};
  font-size: 13px;
  display: block;
`

Post.Content = styled.p`
  margin: 10px 0;
  font-size: 15px;
  line-height: 1.5;
`

Post.Description = styled.div`
  width: 100%;
  padding: 0 1rem;
`

export default Post
