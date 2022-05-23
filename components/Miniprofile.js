import { useSession, signOut } from 'next-auth/react'

function Miniprofile() {
  const { data: session, status, loading } = useSession()
  console.log(session)
  return (
    <div className="mt-14 ml-10 flex justify-between">
      <img
        src={session?.user?.image || 'https://links.papareact.com/3ke'}
        className="h-16 w-16 rounded-full border p-[2px]"
        alt=""
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">{session?.user?.username || 'TEST'}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button
        onClick={signOut}
        className="flex text-sm font-semibold text-blue-400"
      >
        Sign Out
      </button>
    </div>
  )
}

export default Miniprofile
