import React from 'react'
import PostsProvider from './contexts/Posts'
import UserProvider from './contexts/User'
import {Layout, LayoutFeed, Header, PrivateComponent} from './components'

function App() {
  return (
    <UserProvider>
      <Layout>
        <Header />
        <PostsProvider>
          <LayoutFeed>
            <PrivateComponent />
          </LayoutFeed>
        </PostsProvider>
      </Layout>
    </UserProvider>
  )
}

export default App
