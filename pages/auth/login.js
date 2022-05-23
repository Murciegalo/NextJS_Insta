import { getProviders, signIn } from 'next-auth/react'
// providers !== null &&
function login({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign In with {provider.name}
          </button>
        </div>
      ))}
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
