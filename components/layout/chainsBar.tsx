import React from "react";
import Router from "next/router";
import Link from "next/link";
import { ChainSContainer, ButtonsWrapper, LinkWrapper } from "./chainsBarCss";

const ChainBars = () => {
    return <ChainSContainer>
        <ButtonsWrapper>
            <LinkWrapper>
                <Link href="/ethereum">
                    ETH
                </Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link href="/bsc">
                    BSC
                </Link>
            </LinkWrapper>
            <LinkWrapper>
                <Link href="/polygon">
                    POLYGON
                </Link>
            </LinkWrapper>
        </ButtonsWrapper>
    </ChainSContainer>
}

export default ChainBars;