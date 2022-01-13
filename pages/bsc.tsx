import React from "react";
import type { NextPage } from 'next';
import { GlobalStyle } from "../theme/globalStyle";
import ChainBars from "../components/layout/chainsBar";
import GameRules from "../components/gameRules/gameRules";
import MainContainer from "../components/layout/mainContainer";


const Bsc: NextPage = () => {
    return <>
        <MainContainer>
            <GlobalStyle />
            <ChainBars />
            <GameRules />
        </MainContainer>
    </>
}

export default Bsc;