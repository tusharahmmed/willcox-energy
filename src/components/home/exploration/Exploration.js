import React from 'react';
import styled from 'styled-components';
import { fontSize } from '../../../constants/fontSize';
import { device } from '../../../constants/screenSize';
import bgImg from '../../../images/exploration.png';

const Exploration = () => {
    return (
        <Container>
            <Wraper className='section-padding'>
                <Title>Exploration</Title>
                <Subtitle>"The Most Exciting New Player in the North American Lithium Story "</Subtitle>
                <Description>Willcox Energy is developing lithium brine exploration projects in Nevada, Texas, and Alberta, Canada.
                    Unprecedented demand for lithium presents a significant opportunity for early investors
                    Based on our locations, accumulation of very promising geological and geophysical findings,
                    and highly a capable management team, our venture is well-positioned among peers to be the
                    most exciting domestic lithium brine exploration project in the United States.
                    Willcox, and our like-minded partners, are poised to help secure the US domestic lithium
                    supply chain and support the energy transition.
                </Description>
                <Description>We entered into a joint venture with NeoLithica for the exploration, the extraction and the refining of battery-grade lithium from brine.</Description>
                <Description>NeoLithica owns 260,000 hectares (1,005 sq. miles) of mineral permits in NW Alberta containing highly prospective lithium brines.</Description>
                <More>Learn More</More>
            </Wraper>
            <Background />
        </Container>
    );
};

export default Exploration;


const Container = styled.section`
position: relative;
`;
const Wraper = styled.div`
padding-right: 31%;
background: var(--secondary-background);
padding-top: 6rem;
padding-bottom: 6rem;

@media ${device.laptop}{
    padding-right: 36%;
}
@media ${device.menuMobile}{
    padding-right: 6%;
    padding-top: 4rem;
    padding-bottom: 4rem;
}
@media ${device.mobileL}{
    padding-right: 4%;
    padding-top: 3rem;
    padding-bottom: 3rem;
}
`;
const Title = styled.h2`
font-size: ${fontSize[11]}px;
line-height: 133.5%;
color: var(--theme-color);

@media ${device.laptop}{
    font-size: ${fontSize[10]}px;
}
@media ${device.pad}{
    font-size: ${fontSize[9]}px;
}
@media ${device.mobileL}{
    font-size: ${fontSize[7]}px;
}
`;
const Subtitle = styled.h3`
font-weight: 500;
font-size: ${fontSize[4]}px;;
line-height: 133.5%;
margin-top: 18px;
margin-bottom: 35px;

@media ${device.mobileL}{
    font-size: ${fontSize[3]}px;
}
`;
const Description = styled.p`
margin-bottom: 18px;
line-height: 143.5%;
`;
const More = styled.button`
width: 173px;
height: 50px;
background: var(--theme-color);
border: none;
outline: none;
border-radius: 10px;
font-size: 18px;
line-height: 20px;
color: #fff;
cursor: pointer;
`;
const Background = styled.div`
display: visible;
position: absolute;
top: 0;
right: 0;
bottom: 0;
width: 348px;
background: url(${bgImg});
background-repeat:no-repeat;
background-size: cover;


@media ${device.laptop}{
    width: 300px;
}
@media ${device.menuMobile}{
    display: none;
}
`;