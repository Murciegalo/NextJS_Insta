import { getProviders, signIn } from 'next-auth/react'
import Header from '../../components/Header'

function login({ providers }) {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <img
          src="https://links.papareact.com/ocw"
          alt=""
          className="-mt-40 w-80"
        />
        <p className="font-xs italic">
          Practices Purposes with Recoil state management
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className=" rounded-lg bg-blue-500 p-3 text-white"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign In with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
// Middleware Render
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default login
