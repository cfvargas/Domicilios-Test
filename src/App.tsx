import React from 'react'
import PostsProvider from './contexts/Posts'
import {Feed, Layout, LayoutFeed, Header, AddPost} from './components'

const comment = {
  id: 'xxx-yyy-zzz',
  user: {
    firstName: 'Cristian',
    lastName: 'Vargas',
    picture: 'https://picsum.photos/200',
  },
  content: 'Lorem ipsum dolor sit amet consectetur?',
  created: new Date(),
}

const fakePost: any = {
  user: {
    firstName: 'Cristian',
    lastName: 'Vargas',
    picture: 'https://picsum.photos/200',
  },
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique totam magnam architecto vero, tenetur illum consequatur provident non, assumenda earum cum? Ab fugiat voluptatem itaque illum, numquam similique quos earum?',
  comments: [
    {...comment},
    {
      ...comment,
      id: 'yyy-xxx-zzz',
      user: {...comment.user, firstName: 'Andres'},
    },
  ],
  reactions: [
    {
      type: 'like',
      users: [
        {
          firstName: 'Cristian',
          lastName: 'Vargas',
        },
        {
          firstName: 'Andres',
          lastName: 'Lozano',
        },
      ],
    },
    {
      type: 'love',
      users: [
        {
          firstName: 'Danilo',
          lastName: 'Caviedes',
        },
        {
          firstName: 'Jose',
          lastName: 'Perdomo',
        },
      ],
    },
  ],
  created: new Date(),
}

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
