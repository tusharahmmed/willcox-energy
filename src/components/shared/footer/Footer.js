import React from 'react';
import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';
import { fontSize } from '../../../constants/fontSize';
import { device } from '../../../constants/screenSize';

const Footer = () => {
    return (
        <FooterContainer className='section-padding'>
            <CopyWright>© 2022 by Willcox Energy <LineBreak /> <span></span> All Rights Reserved. </CopyWright>
            <SocialIcons>
                <a href="#"><p><FaInstagram /></p></a>
                <a href="#"><p><FaDribbble /></p></a>
                <a href="#"><p><FaTwitter /></p></a>
                <a href="#"><p><FaYoutube /></p></a>
            </SocialIcons>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
height: 81px;
background: #F1F2F2;
display: flex;
align-items: center;
justify-content: space-between;

@media ${device.mobileL}{
    flex-direction: column;
    padding: 1rem 0rem;  
}
`;

const CopyWright = styled.p`
font-size: ${fontSize[0]}px;
line-height: 24px;
font-family: 'Manrope', sans-serif;

@media ${device.mobileL}{
    margin-bottom: 10px;
}
span{
    margin-left: 20px;
}
`;

const SocialIcons = styled.div`
display: flex;
a{
    margin-right: 24px;
    color: #767676;
    
}
p{
    background: #E5E6E6;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 99px;
    font-size: 18px;
}
`;

const LineBreak = styled.br`
display: none;
@media ${device.mobileL}{
    display: block; 
}

`;