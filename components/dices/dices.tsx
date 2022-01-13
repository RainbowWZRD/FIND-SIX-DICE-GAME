import React from "react";
import { DicesBox, Dice } from './dicesCss'

const Dices = () => {
    return <>
        <DicesBox>
            <Dice />
            <Dice />
            <Dice />
            <Dice />
        </DicesBox>
    </>
}

export default Dices;