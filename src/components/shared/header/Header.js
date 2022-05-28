import React, { useState } from 'react';
import './Header.css';
import styled from 'styled-components';
import { fontSize } from '../../../constants/fontSize';
import logo from '../../../images/logo.png'
import { device } from '../../../constants/screenSize';
import { Sling as Hamburger } from 'hamburger-react'

const Header = () => {

    const [height, setHeight] = useState(90);

    const MenuLinks = () => (
        <>
            <span><a href="#">Home</a></span>
            <span><a href="#">Business</a></span>
            <span><a href="#">About us</a></span>
            <span><a href="#">Lithium 101</a></span>
            <span><a href="#">Sustainability</a></span>
            <span><a href="#">Projects</a></span>
        </>
    )


    return (
        <HeaderContainer id='header' className='section-padding'>

            <Logo>
                <img src={logo} alt="logo" />
            </Logo>

            <NavSection>

                <Nav className='nav'>
                    <MenuLinks />
                </Nav>

                <a href="#"><Button>Contact</Button></a>

                <MenuIcon>
                    <Hamburger />
                </MenuIcon>

            </NavSection>

        </HeaderContainer>
    );
};

export default Header;


const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
height: 90px;
position: fixed;
top: 0;
left: 0;
right: 0;
background: #fff;
z-index: 10;
transition: .6s;
`;
const Logo = styled.div`

img{
    width: 90px;
}
`;

const NavSection = styled.div`
display: flex;
align-items: center;
`;


const Nav = styled.nav`

@media ${device.menuMobile}{
    display: none;
}

span{
    margin-right: 30px;

    @media ${device.laptop}{
        margin-right: 15px;
    }
    a{
        color: var(--font-color-seconday);
        font-size: ${fontSize[2]}px;
        padding: 0 5px;

        &:hover{
            color: var(--theme-color); 
        }
    }
}

`;

const MenuIcon = styled.div`
display: none;

@media ${device.menuMobile}{
    display: inline-block;
}
`;


const Button = styled.button`
border: none;
outline: none;
border-radius: 999px;
background: var(--theme-color);
color: var(--white-color);
font-weight: bold;
font-size: ${fontSize[2]}px;
padding: 10px 20px; 
cursor: pointer; 

@media ${device.menuMobile}{
    display: none;
}
`;