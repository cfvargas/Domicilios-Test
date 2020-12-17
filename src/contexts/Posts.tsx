import React from 'react'
import {postType} from '../components'
import {v4 as uuid} from 'uuid'

export const PostContext = React.createContext({})

export type PostContextType = {
  addComment: (postId: string, content: string) => void
  addPost: (message: string) => void
  addReaction: (postId: string, reactionType: 'like' | 'love' | 'care') => void
  posts: postType[]
}

function getPostsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('posts') || '[]')
}

const currentUser = {
  id: 'xxx',
  firstName: 'Cristian',
  lastName: 'Vargas',
  picture: 'https://picsum.photos/200',
}

const PostProvider: React.FC = ({children}) => {
  const [posts, setPosts] = React.useState<postType[]>(getPostsFromLocalStorage)

  function addPost(message: string) {
    setPosts([
      ...posts,
      {
        id: uuid(),
        user: currentUser,
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

  function getCurrentPosts(postId: string) {
    const postIndex = posts.findIndex(post => post.id === postId)
    const newPosts = [...posts]
    const post = posts.filter(item => item.id === postId).pop() as postType

    function savePost() {
      newPosts[postIndex] = post
      setPosts(newPosts)
    }

    return {post, savePost}
  }

  function addReaction(postId: string, reactionType: 'like' | 'love' | 'care') {
    const {post, savePost} = getCurrentPosts(postId)

    Object.getOwnPropertyNames(post.reactions).forEach(key => {
      const reactionIndex = post.reactions[key].findIndex(
        user => user.id === currentUser.id,
      )

      if (reactionIndex >= 0) {
        post.reactions[key].splice(reactionIndex, 1)
      } else if (key === reactionType) {
        post.reactions[reactionType] = [
          ...post.reactions[reactionType],
          currentUser,
        ]
      }
    })

    savePost()
  }

  function addComment(postId: string, content: string) {
    const {post, savePost} = getCurrentPosts(postId)

    post.comments.push({
      id: uuid(),
      content,
      user: currentUser,
      created: new Date(),
    })

    savePost()
  }

  React.useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }, [posts])

  return (
    <PostContext.Provider value={{addPost, posts, addReaction, addComment}}>
      {children}
    </PostContext.Provider>
  )
}

export default PostProvider
