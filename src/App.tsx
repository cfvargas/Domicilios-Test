import React from 'react'
import {Post, Layout, LayoutFeed, Header, postType} from './components'

const comment = {
  id: 'xxx-yyy-zzz',
  user: {
    firstName: 'Cristian',
    lastName: 'Vargas',
    picture:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.0-9/129953134_10221344432593788_6349793943326329587_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=4iJkllzunwUAX9EPuPW&_nc_ht=scontent.fbog4-1.fna&oh=c520abba32a59eb63a3d036be33ea0a1&oe=6000C1C1',
  },
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique totam magnam architecto vero, tenetur illum consequatur provident non, assumenda earum cum? Ab fugiat voluptatem itaque illum, numquam similique quos earum?',
  created: new Date(),
}

const fakePost: postType = {
  user: {
    firstName: 'Cristian',
    lastName: 'Vargas',
    picture:
      'https://scontent.fbog4-1.fna.fbcdn.net/v/t1.0-9/129953134_10221344432593788_6349793943326329587_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=4iJkllzunwUAX9EPuPW&_nc_ht=scontent.fbog4-1.fna&oh=c520abba32a59eb63a3d036be33ea0a1&oe=6000C1C1',
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
        <Post post={fakePost} />
        <Post post={fakePost} />
        <Post post={fakePost} />
      </LayoutFeed>
    </Layout>
  )
}

export default App
