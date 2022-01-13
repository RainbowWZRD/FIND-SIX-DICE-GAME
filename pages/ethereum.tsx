import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../theme/globalStyle';
import MainContainer from '../components/layout/mainContainer';
import ChainBars from '../components/layout/chainsBar';
import GameRules from '../components/gameRules/gameRules';

const Home: NextPage = () => {
  return (<>
    <Layout>
      <Head>
        <title>Six dices game</title>
        <meta name="Six dices game" content="Six dices game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <ChainBars />
        <GameRules />
      </MainContainer>
    </Layout>
  </>
  )
}

export default Home
