import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../theme/globalStyle'
import MainContainerProps from '../components/layout/mainContainer'

const Home: NextPage = () => {
  return (<>
    <Layout>
      <Head>
        <title>Six dices game</title>
        <meta name="Six dices game" content="Six dices game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainerProps />
    </Layout>
  </>
  )
}

export default Home
