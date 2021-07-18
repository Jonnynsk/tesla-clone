import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Section = ({ title, description, leftBtnText, rightBtnText, backgroundImg, downArrow }) => {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>}
                    </ButtonGroup>
                </Fade>
                <DownArrow src={downArrow} />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url('/images/${props.bgImage}')`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    font-size: 12px;
    background-color rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.95;
    text-transform: uppercase;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color rgba(255, 255, 255, 0.65);
    color: rgb(57, 60, 65);
`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``