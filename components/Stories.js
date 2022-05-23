import { useEffect, useState } from 'react'
import faker from '@faker-js/faker'
import Story from './Story'

import React from 'react'
import { useSession } from 'next-auth/react'

function Stories() {
  const [suggestions, setSuggestions] = useState([])
  const { data: session } = useSession()
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, I) => ({
      ...faker.helpers.contextualCard(),
      id: I,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <section
      className="border-gray-20 mt-8 flex space-x-2 
    overflow-x-scroll rounded-sm border bg-white 
    p-6 scrollbar-thin scrollbar-thumb-black"
    >
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((el) => (
        <Story key={el.id} img={el.avatar} username={el.username} />
      ))}
    </section>
  )
}

export default Stories
