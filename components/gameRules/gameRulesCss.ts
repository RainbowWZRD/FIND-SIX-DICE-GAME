import styled from 'styled-components'

export const GameRulesWrapper = styled.div`
font-family: 'Open Sans', sans-serif;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 3rem;
& h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}
& h2 {
    font-size: 2rem;
    margin-bottom: .5rem;

    @media (max-width : 500px) {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
}
`