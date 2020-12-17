import React from 'react'
import moment from 'moment'

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
  <article>
    <p>{`${post.user.firstName} ${post.user.lastName}`}</p>
    <p>{moment(post.created).fromNow()}</p>
    <p>{post.content}</p>
    <img alt={`${post.user.firstName}'s avatar`} src={post.user.picture} />
  </article>
)

export default Post
