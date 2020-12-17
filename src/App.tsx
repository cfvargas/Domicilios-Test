import React from 'react'
import {Post, postType} from './components'

const fakePost: postType = {
  user: {
    firstName: 'Cristian',
    lastName: 'Vargas',
    picture: 'https://cristian-picture.png',
  },
  content: 'Mi primer publicación',
  created: new Date(),
}

function App() {
  return (
    <div className="App">
      <Post post={fakePost} />
    </div>
  )
}

export default App
