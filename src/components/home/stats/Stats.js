import React from 'react';
import styled from 'styled-components';
import buildingIcon from '../../../images/icon/icon-building.svg';
import menIcon from '../../../images/icon/icon-men.svg';
import handIcon from '../../../images/icon/icon-hand.svg';
import { fontSize } from '../../../constants/fontSize';
import { device } from '../../../constants/screenSize';

const Stats = () => {
    return (
        <Container className='section-padding'>

            <Item>
                <Icon>
                    <img src={buildingIcon} alt="" />
                </Icon>
                <Title>2021</Title>
                <Description>Year Established</Description>
            </Item>
            <Item>
                <Icon>
                    <img src={menIcon} alt="" />
                </Icon>
                <Title men={true}>340,000</Title>
                <Description>Owned Hectares of controlled <br/> mineral rights</Description>
            </Item>
            <Item>
                <Icon>
                    <img src={handIcon} alt="" />
                </Icon>
                <Title>1448</Title>
                <Description>Acres of water rights</Description>
            </Item>

        </Container>
    );
};

export default Stats;


const Container = styled.section`
display: flex;
justify-content: space-around;
padding-top: 7rem;
padding-bottom: 7rem;

@media ${device.laptop}{
    padding-top: 6rem;
    padding-bottom: 6rem;
}
@media ${device.pad}{
    padding-top: 5rem;
    padding-bottom: 5rem;
}
@media ${device.mobileL}{
    flex-direction: column;
    padding-top: 3rem;
    padding-bottom: 3rem;
}
`;
const Item = styled.div`
text-align: center;

@media ${device.mobileL}{
    padding-top: 2rem;
    padding-bottom: 2rem;
}
`;
const Icon = styled.div`

`;
const Title = styled.h2`
line-height: 54px;
font-size: ${fontSize[7]}px;
padding-top: ${(props)=> props.men ? '1.25rem': '0'};
`;
const Description = styled.p`

`;