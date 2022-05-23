import { useState, useEffect } from 'react'
import faker from '@faker-js/faker'

function Suggestions() {
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, I) => ({
      ...faker.helpers.contextualCard(),
      id: I,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-4 ml-10 flex flex-col">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>
      {suggestions.map((el) => (
        <div key={el.id} className="mt-3 flex items-center justify-between">
          <img
            src={el.avatar}
            alt=""
            className="h-10 w-10 rounded-full border p-[2px]"
          />
          <div className="ml-4 flex-1">
            <h2 className="text-sm font-semibold">{el.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {el.company.name}
            </h3>
          </div>
          <button className="text-blue-4">Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
