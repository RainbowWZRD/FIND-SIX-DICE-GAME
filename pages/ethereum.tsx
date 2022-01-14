import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../theme/globalStyle';
import MainContainer from '../components/layout/mainContainer';
import ChainBars from '../components/layout/chainsBar';
import GameRules from '../components/gameRules/gameRules';
import DicesContainer from '../components/dicesContainer/dicesContainer';
import {MetaMaskInpageProvider} from '@metamask/providers'

//Declaring a global interface to let Typescrypt be aware of the existence of ethereum' module
//which is located in the global window
declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

const Home: NextPage = () => {
  useEffect(() => {
    const ethereum = window.ethereum as MetaMaskInpageProvider;
    if (typeof window.ethereum !== 'undefined') {
      ethereum.request<string[]>({ method: 'eth_requestAccounts' });
    }
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
