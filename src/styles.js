import styled from 'styled-components'

export const Container = styled.div`
    width: 50vw;
    height: 100vh;
   display: flex;
   flex-direction: column;
    align-items: center;
    margin: 0 auto;
`

export const ChallengeLetter = styled.h1`
    font-size: 20vh;
    display: flex;
    justify-content: center;
`

export const ButtonsOptions = styled.button`
    width: 20vw;
    height: 10vh;
    font-size: 5vh;
    margin: 0 auto;
    border: solid 0.1vh black;
    border-radius: 2vh;
    background-color: white;

    &:hover {
        background-color: #F5F5F5;

        cursor: pointer;
    }

    &:active {

    }
`

export const ScoreP = styled.p`
    font-size: 5vh;
`

export const ContainerButtons = styled.div`
    width: 95%;
    display: grid;
    grid-template-columns: 45% 45%;
    row-gap: 2vh;
    justify-content: center;
    margin-bottom: 5vh;
`

export const ContainerChallengeLetter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40%;
    border-radius: 5vw;
    margin: 2vw auto;
`