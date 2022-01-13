import styled from "styled-components"

export const DicesBox = styled.div`
width: 90%;
height: auto;
display: flex;
justify-content: space-between;

@media (max-width : 500px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: .4rem;
    row-gap: .4rem;
}
`

export const Dice = styled.div`
height: 15rem;
width: 15rem;
background: #FFFFFF;
border-radius: 15px;

@media (max-width : 500px) {
    height: 13rem;
width: 13rem;
}
`