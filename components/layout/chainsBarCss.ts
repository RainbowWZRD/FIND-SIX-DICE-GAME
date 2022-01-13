import styled from 'styled-components'

export const ChainSContainer = styled.div`
font-family: 'Open Sans', sans-serif;
width: 73rem;
height: 13rem;
background: #343536;
border-radius: 12px;
box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
display: flex;
align-items: center;
justify-content: center;
margin-top:3rem ;

@media (max-width : 1000px) {
    width: 50rem;
    }

    @media (max-width : 500px) {
    width: 35rem;
    height: 10rem;
    }
`

export const ButtonsWrapper = styled.div`
height: 70%;
width: 90%;
display: flex;
justify-content: space-evenly;
`

export const LinkWrapper = styled.div`
opacity: ${props => props.active ? "1" : "0.4"};
width: 10rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: auto;
& a {
    color: white;
    text-decoration: none;
    font-size: 2rem;
}
`