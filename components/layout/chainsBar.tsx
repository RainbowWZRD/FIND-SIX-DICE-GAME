import React from "react";
import Image from "next/image";
import ethLogo from '../../images/ethLogo.png';
import bnbLogo from '../../images/binanceLogo.png';
import maticLogo from '../../images/maticLogo.png';
import Link from "next/link";
import { ChainSContainer, ButtonsWrapper, LinkWrapper } from "./chainsBarCss";

const ChainBars = () => {
    return <ChainSContainer>
        <ButtonsWrapper>
            <LinkWrapper>
                <Image src={ethLogo} alt="eth-logo" width="30px" height="30px" />
                <Link href="/ethereum">
                    ETH
                </Link>
            </LinkWrapper>
            <LinkWrapper>
                <Image src={bnbLogo} alt="bnb-logo" width="30px" height="30px" />
                <Link href="/bsc">
                    BSC
                </Link>
            </LinkWrapper>
            <LinkWrapper>
                <Image src={maticLogo} alt="matic-logo" width="30px" height="30px" />
                <Link href="/polygon">
                    POLYGON
                </Link>
            </LinkWrapper>
        </ButtonsWrapper>
    </ChainSContainer>
}

export default ChainBars;