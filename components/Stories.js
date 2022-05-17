import { useEffect, useState } from 'react'
import faker from '@faker-js/faker'
import { Story } from './Story'

export const Stories = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, I) => ({
      ...faker.helpers.contextualCard(),
      id: I,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <section
      className="rounded-sn mt-8 flex space-x-2 
    overflow-x-scroll border border-gray-200 bg-white p-6"
    >
      {suggestions.map((el) => (
        <Story key={el.id} img={el.avatar} username={el.username} />
      ))}
    </section>
  )
}
