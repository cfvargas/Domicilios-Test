import React from 'react'
import {postType} from '../components'
import {v4 as uuid} from 'uuid'

export const PostContext = React.createContext({})

export type PostContextType = {
  addPost: (message: string) => void
  posts: postType[]
}

function getPostsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('posts') || '[]')
}

const PostProvider: React.FC = ({children}) => {
  const [posts, setPosts] = React.useState<postType[]>(getPostsFromLocalStorage)

  function addPost(message: string) {
    setPosts([
      ...posts,
      {
        id: uuid(),
        user: {
          firstName: 'Cristian',
          lastName: 'Vargas',
          picture: 'https://picsum.photos/200',
        },
        content: message,
        created: new Date(),
        comments: [],
        reactions: [],
      },
    ])
  }

  React.useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts])

  return (
    <PostContext.Provider value={{addPost, posts}}>
      {children}
    </PostContext.Provider>
  )
}

export default PostProvider
