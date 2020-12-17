import React from 'react'
import {Post, Layout, LayoutFeed, Header, AddPost, postType} from './components'

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

const fakePost: postType = {
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
      <LayoutFeed>
        <AddPost />
        <Post post={fakePost} />
        <Post post={fakePost} />
        <Post post={fakePost} />
      </LayoutFeed>
    </Layout>
  )
}

export default App
