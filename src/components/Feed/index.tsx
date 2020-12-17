import React from 'react'
import {Post} from '../'
import {PostContext, PostContextType} from '../../contexts/Posts'

const Feed = () => {
  const {posts} = React.useContext(PostContext) as PostContextType

  return (
    <React.Fragment>
      {posts.map(post => <Post key={post.id} post={post} />).reverse()}
    </React.Fragment>
  )
}

export default Feed
