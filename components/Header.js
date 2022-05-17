import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
export const Header = () => {
  return (
    <main>
      <section className="flex max-w-6xl justify-between">
        <div
          className="relative hidden h-24 w-24 lg:inline-grid"
          cursor-pointer
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative h-10 w-10 flex-shrink-0 cursor-pointer lg:hidden">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <div></div>
          <input type="text" placeholder="Search" />
        </div>
      </section>
    </main>
  )
}
