import React from 'react'
import { Post } from './Post'

const DATA = [
  {
    id: '123',
    username: 'sssangha',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'Subscribe and press the like button to help me with YT algorithm',
  },
  {
    id: '213',
    username: 'sssangha',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'Subscribe and press the like button to help me with YT algorithm',
  },
]

export const Posts = () => {
  return (
    <div>
      {DATA.map((el) => (
        <Post key={el.id} el={el} />
      ))}
    </div>
  )
}
