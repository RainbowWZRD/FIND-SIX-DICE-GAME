import React, { useState, useEffect } from "react";
import { GameRulesWrapper } from './gameRulesCss'

const GameRules = () => {
    const [chainLocation, setChainLocation] = useState<string | null>(null)

    useEffect(() => {
        const currentLocation = window.location.href;
        if (currentLocation.includes("ethereum")) {
            setChainLocation("ETH")
            console.log("ETH")
        } else if (currentLocation.includes("bsc")) {
            setChainLocation("BNB")
            console.log("BNB")
        } else {
            setChainLocation("MATIC")
            console.log("MATIC")
        }
    })

    return <GameRulesWrapper>
        <h1>Send {chainLocation} to play: </h1>
        <h2>1. Dice 6 === 6x</h2>
        <h2>1. and 2. Dice 6 === 100x</h2>
        <h2>1. and 2. and 3. Dice 6 === 1.000x</h2>
        <h2>1. and 2. and 3. and 4. Dice 6 === 10.000x</h2>
    </GameRulesWrapper>
}

export default GameRules;