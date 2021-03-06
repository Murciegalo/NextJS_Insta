import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import { useSession, signIn, signOut } from 'next-auth/react'
import { modalState } from '../atoms/modal'

function Header() {
  const { data: session, status, loading } = useSession()
  const [open, setOpen] = useRecoilState(modalState)
  const router = useRouter()
  console.log(session)
  return (
    <main className="shadow-sn sticky top-0 z-50 border-b bg-white py-2 px-8">
      <section className="align-center mx-5 flex max-w-6xl items-center justify-between px-2 lg:mx-auto">
        <div
          onClick={() => router.push('/')}
          className="relative hidden h-24 w-24 cursor-pointer lg:inline-grid"
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectfit="contain"
          />
        </div>
        <div
          onClick={() => router.push('/')}
          className="relative flex h-10 w-10 flex-shrink-0 cursor-pointer 
        items-center items-center lg:hidden"
        >
          <Image
            src={session?.user?.image || 'https://links.papareact.com/jjm'}
            layout="fill"
            objectfit="contain"
          />
        </div>
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="text-gray-500=true h-5 w-5" />
            </div>
            <input
              className="sn:text-sm block w-full rounded-md border-gray-300 bg-gray-50 
            pl-10 focus:border-black focus:ring-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push('/')} className="navBtn" />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />
          {/* {session ? ( */}
          <>
            <div className="navBtn relative">
              <PaperAirplaneIcon className="navBtn" />
              <div
                className="absolute -top-1 -right-2 flex h-5 w-5 animate-pulse 
            items-center justify-center rounded-full bg-red-500 text-xs text-white"
              >
                3
              </div>
            </div>
            <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
            <UserGroupIcon className="navBtn" />
            <HeartIcon className="navBtn" />

            <img
              onClick={signOut}
              alt="profile pic"
              className="h-10 w-10 cursor-pointer rounded-full"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ShQwgH2v9ZMHDbPod81-QgHaEK%26pid%3DApi&f=1"
            />
          </>
          {/* ) : ( */}
          {/* <button onClick={signIn}>Sign In</button>
          )} */}
        </div>
      </section>
    </main>
  )
}

export default Header
