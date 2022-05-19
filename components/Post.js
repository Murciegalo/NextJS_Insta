import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HearIconFilled } from '@heroicons/react/solid'

export const Post = ({ el: { id, username, userImg, img, caption } }) => {
  return (
    <div className="my-7 rounded-sm border bg-white">
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img src={img} className="w-full object-cover" alt="cover pic" />
      <div>
        <HeartIcon className="btn" />
        <ChatIcon className="btn" />
        <PaperAirplaneIcon className="btn" />
      </div>
    </div>
  )
}
