import { useState, useEffect } from 'react'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
import Post from './Post'

function Posts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setPosts(snapshot.docs)
      }
    )
    return unsubscribe()
  }, [db])

  return (
    <div>
      {posts.map((el) => (
        <Post key={el.id} el={el} />
      ))}
    </div>
  )
}

export default Posts
