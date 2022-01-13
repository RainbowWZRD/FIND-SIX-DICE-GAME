import React from "react";
import { ContainerLayout } from './mainContainerCss'

interface IMainContainerProps {
    children?: React.ReactNode;
}

const MainContainer = ({ children }: IMainContainerProps) => {
    return <ContainerLayout>
        {children}
    </ContainerLayout>
}

export default MainContainer;