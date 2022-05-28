import React from 'react';
import styled from 'styled-components';
import { fontSize } from '../../../constants/fontSize';
import { device } from '../../../constants/screenSize';
import partner from '../../../images/partners.png';

const OurPartner = () => {
    return (
        <Container className='section-padding'>
            <Title>OUR PARTNERS</Title>
            <Partners>
                <img src={partner} alt="" />
            </Partners>
        </Container>
    );
};

export default OurPartner;


const Container = styled.section`
padding-top: 6rem;
padding-bottom: 6rem;
text-align: center;
background: #FFFCF1;

@media ${device.laptop}{
    padding-top: 5rem;
    padding-bottom: 5rem;
}
@media ${device.pad}{
    padding-top: 4rem;
    padding-bottom: 4rem;
}
@media ${device.mobileL}{
    padding-top: 3rem;
    padding-bottom: 3rem;
}
`;

const Title = styled.h2`
font-weight: 600;
font-size: ${fontSize[7]}px;
line-height: 133.5%;
color: var(--theme-color);
margin-bottom: 20px;

@media ${device.laptop}{
    font-size: ${fontSize[6]}px;
}
@media ${device.pad}{
    font-size: ${fontSize[5]}px;
}
@media ${device.mobileL}{
    font-size: ${fontSize[4]}px;
}
`;

const Partners = styled.div`

`;