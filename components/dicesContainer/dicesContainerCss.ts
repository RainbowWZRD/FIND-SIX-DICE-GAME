import styled from 'styled-components'

export const DicesWrapper = styled.div`
font-family: 'Open Sans', sans-serif;
width: 73rem;
height: 28rem;
background: #343536;
border-radius: 12px;
box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin-top:3rem ;

@media (max-width : 1000px) {
    width: 50rem;
    }

    @media (max-width : 500px) {
    width: 30rem;
    height: 40rem;
    }
`