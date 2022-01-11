import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../theme/globalStyle'

const Home: NextPage = () => {
  return (<>
    <Layout>
      <Head>
        <title>Six dices game</title>
        <meta name="Six dices game" content="Six dices game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>hello</div>
    </Layout>
  </>
  )
}

export default Home
