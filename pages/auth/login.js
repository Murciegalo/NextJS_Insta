import { getProviders, signIn } from 'next-auth/react'

function login({ providers }) {
  return (
    <>
      {providers !== null &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign In with {provider.name}
            </button>
          </div>
        ))}
    </>
  )
}
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default login
