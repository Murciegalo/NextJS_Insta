import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
const Home = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-50 scrollbar-hide">
      <Head>
        <title>Insta App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
    </div>
  )
}

export default Home
