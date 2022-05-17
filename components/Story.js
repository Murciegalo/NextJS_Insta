import React from 'react'

export const Story = ({ img, username }) => {
  return (
    <div>
      <img
        className="h-14 w-14 cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px]"
        src={img}
        alt="profile pic"
      />
      <p>{username}</p>
    </div>
  )
}
