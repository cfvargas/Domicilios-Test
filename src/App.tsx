import React from 'react'
import {Post, publicationType} from './components'

const fakePost: publicationType = {
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

function App() {
  return (
    <div className="App">
      <Post post={fakePost} />
    </div>
  )
}

export default App
