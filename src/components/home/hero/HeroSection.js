import React from 'react';
import styled from 'styled-components';
import { fontSize } from '../../../constants/fontSize';
import { device } from '../../../constants/screenSize';
import bgVideo from '../../../videos/green-cm.mp4'

const HeroSection = () => {
    return (
        <Container>
            <video autoPlay loop muted>
                <source src={bgVideo} type='video/mp4' />
            </video>

            <Info>
                <Title>World class <br/> intergrated Lithium <br/> Project</Title>
                <Subtitle>IN THE USA AND CANADA</Subtitle>
            </Info>
        </Container>
    );
};

export default HeroSection;


const Container = styled.section`
position: relative;
height: calc(100vh - 90px);
margin-top: 90px;

video{
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: calc(100vh - 90px);
   z-index: -1;
   object-fit: cover;
}
`;

const Info = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
text-align: center;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
`
const Title = styled.h1`
font-size: ${fontSize[10]}px;
line-height: 120%;
color: var(--white-color);

@media ${device.laptop}{
    font-size: ${fontSize[9]}px;
}
@media ${device.pad}{
    font-size: ${fontSize[9]}px;
}
@media ${device.mobileL}{
    font-size: ${fontSize[6]}px;
    font-weight: 600;
}
`
const Subtitle = styled.p`
font-size: ${fontSize[6]}px;
line-height: 180%;
color: rgba(255, 255, 255, 0.8);
margin-bottom: 5%;

@media ${device.mobileL}{
    font-size: ${fontSize[4]}px;
}
`