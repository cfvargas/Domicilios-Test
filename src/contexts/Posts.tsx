import React from 'react'
import {postType} from '../components'
import {v4 as uuid} from 'uuid'

export const PostContext = React.createContext({})

export type PostContextType = {
  addPost: (message: string) => void
  addReaction: (postId: string, reactionType: 'like' | 'love' | 'care') => void
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
          id: 'xxx',
          firstName: 'Cristian',
          lastName: 'Vargas',
          picture: 'https://picsum.photos/200',
        },
        content: message,
        created: new Date(),
        comments: [],
        reactions: {
          like: [],
          love: [],
          care: [],
        },
      },
    ])
  }

  function addReaction(postId: string, reactionType: 'like' | 'love' | 'care') {
    const postIndex = posts.findIndex(post => post.id === postId)
    const newPosts = [...posts]
    const post = posts.filter(item => item.id === postId).pop() as postType

    Object.getOwnPropertyNames(post.reactions).forEach(key => {
      const reactionIndex = post.reactions[key].findIndex(
        user => user.id === 'xxx',
      )

      if (reactionIndex >= 0) {
        post.reactions[key].splice(reactionIndex, 1)
      } else if (key === reactionType) {
        post.reactions[reactionType] = [
          ...post.reactions[reactionType],
          {id: 'xxx', firstName: 'Felipe', lastName: 'Caviedes'},
        ]
      }
    })

    newPosts[postIndex] = post
    setPosts(newPosts)
  }

  React.useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts])

  return (
    <PostContext.Provider value={{addPost, posts, addReaction}}>
      {children}
    </PostContext.Provider>
  )
}

export default PostProvider
