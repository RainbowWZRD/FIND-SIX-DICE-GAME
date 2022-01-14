import React, {useEffect} from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../theme/globalStyle';
import MainContainer from '../components/layout/mainContainer';
import ChainBars from '../components/layout/chainsBar';
import GameRules from '../components/gameRules/gameRules';
import DicesContainer from '../components/dicesContainer/dicesContainer';
import { ethers, providers } from 'ethers';

const Home: NextPage = () => {

  useEffect(() => {
    const loadProvider = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
    }
    loadProvider()
  })

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
        <DicesContainer />
      </MainContainer>
    </Layout>
  </>
  )
}

export default Home
