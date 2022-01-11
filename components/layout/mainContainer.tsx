import React from "react";
import { ContainerLayout } from './mainContainerCss'

interface IMainContainerProps {
    children?: React.ReactNode;
}

const MainContainerProps = ({ children }: IMainContainerProps) => {
    return <ContainerLayout>
        {children}
    </ContainerLayout>
}

export default MainContainerProps;