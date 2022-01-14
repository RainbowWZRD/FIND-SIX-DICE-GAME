import React, { useState, useEffect } from "react";
import Image from "next/image";
import ethLogo from '../../images/ethLogo.png';
import bnbLogo from '../../images/binanceLogo.png';
import maticLogo from '../../images/maticLogo.png';
import Link from "next/link";
import { ChainSContainer, ButtonsWrapper, LinkWrapper } from "./chainsBarCss";

const ChainBars = () => {
    const [active, setActive] = useState({
        ethereum: false,
        bsc: false,
        matic: false
    })

    useEffect(() => {
        const windowLocation = window.location.href;
        if (windowLocation.includes("ethereum")) {
            setActive((prev) => {
                return { ...prev, ethereum: true }
            })
        } else if (windowLocation.includes("bsc")) {
            setActive((prev) => {
                return { ...prev, bsc: true }
            })
        } else {
            setActive((prev) => {
                return { ...prev, matic: true }
            })
        }
    }, [])
    
    return <ChainSContainer>
        <ButtonsWrapper>
            <LinkWrapper active={active.ethereum}>
                <Image src={ethLogo} alt="eth-logo" width="30px" height="30px" />
                <Link href="/ethereum">
                    ETH
                </Link>
            </LinkWrapper>
            <LinkWrapper active={active.bsc}>
                <Image src={bnbLogo} alt="bnb-logo" width="30px" height="30px" />
                <Link href="/bsc">
                    BSC
                </Link>
            </LinkWrapper>
            <LinkWrapper active={active.matic}>
                <Image src={maticLogo} alt="matic-logo" width="30px" height="30px" />
                <Link href="/polygon">
                    POLYGON
                </Link>
            </LinkWrapper>
        </ButtonsWrapper>
    </ChainSContainer>
}

export default ChainBars;