import React from 'react';
import styled from 'styled-components';
import { fontSize } from '../../../constants/fontSize';
import { device } from '../../../constants/screenSize';
import dot from '../../../images/icon/icon-pointer.svg'

const ContactsUs = () => {
    return (
        <Container className='section-padding'>
            <Title>Contact Us</Title>
            <Wraper>
                <Map>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.066893696926!2d-72.45154248457737!3d41.2856485792737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e624160378b6d1%3A0x77849095d2b629c2!2sWilcox%20Energy!5e0!3m2!1sen!2sbd!4v1653713426701!5m2!1sen!2sbd" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Map>
                <Info>
                    <img src={dot} alt="" />
                    <InfoTitle>Head Office</InfoTitle>
                    <InfoDescription>
                        13935 Lynmar blvd Tampa Fl 33626 <br />info@willcoxenergy.com
                    </InfoDescription>
                </Info>
            </Wraper>
        </Container>
    );
};

export default ContactsUs;


const Container = styled.section`
background: #F1F2F2;
padding-top: 6rem;
padding-bottom: 6rem;

@media ${device.laptop}{
    padding-top: 4rem;
    padding-bottom: 4rem;   
}
@media ${device.pad}{
    padding-top: 3rem;
    padding-bottom: 3rem;   
}
@media ${device.mobileL}{
    padding-top: 2rem;
    padding-bottom: 2rem;   
}
`;
const Title = styled.h2`
font-weight: 600;
font-size: ${fontSize[6]}px;
color: var(--theme-color);

@media ${device.laptop}{
    font-size: ${fontSize[5]}px; 
}
@media ${device.pad}{
    font-size: ${fontSize[4]}px;
}
`;
const Wraper = styled.div`
padding: 2rem 0rem;
display: grid;
grid-template-columns: 2fr 1fr;

@media ${device.mobileL}{
    grid-template-columns: 1fr; 
}
`;
const Map = styled.div`
width: 90%;

@media ${device.mobileL}{
    margin-bottom: 1.5rem; 
    width: 100%;
}
iframe{
    width: 100%;
    height: 315px;
    border-radius: 10px;

    @media ${device.pad}{
        height: 250px;  
    }
    
}
`;
const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

img{
    width: auto;
    @media ${device.pad}{
        width: 40px; 
    }
    @media ${device.mobileL}{
        width: 30px; 
    }
}
`;
const InfoTitle = styled.h3`
font-weight: 700;
line-height: 133.5%;
font-size: ${fontSize[5]}px;
color: var(--theme-color);

@media ${device.pad}{
    font-size: ${fontSize[4]}px; 
}
@media ${device.mobileL}{
    font-size: ${fontSize[3]}px;
    margin-top: .8rem;
}
`;
const InfoDescription = styled.p`
font-size: ${fontSize[3]}px;
line-height: 30px;
padding-top: 1rem;

@media ${device.mobileL}{
    font-size: ${fontSize[2]}px;
    padding-top: .8rem;
}
`;