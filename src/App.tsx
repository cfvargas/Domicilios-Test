import React from 'react'
import PostsProvider from './contexts/Posts'
import {Feed, Layout, LayoutFeed, Header, AddPost} from './components'

function App() {
  return (
    <Layout>
      <Header>Domicilios Test</Header>
      <PostsProvider>
        <LayoutFeed>
          <AddPost />
          <Feed />
        </LayoutFeed>
      </PostsProvider>
    </Layout>
  )
}

export default App
