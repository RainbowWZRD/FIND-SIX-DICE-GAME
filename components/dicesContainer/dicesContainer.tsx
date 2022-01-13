import React from "react";
import { DicesWrapper } from './dicesContainerCss'
import Dices from "../dices/dices";
import RollDicesBtn from "../rollDicesBtn/rollDicesBtn";


const DicesContainer = () => {
    return <DicesWrapper>
        <Dices />
        <RollDicesBtn />
    </DicesWrapper>
}

export default DicesContainer;