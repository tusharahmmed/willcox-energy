import React from 'react';
import styled from 'styled-components';
import mail from '../../../images/icon/icon-mail.svg';
import employ from '../../../images/icon/icon-employ.svg';
import { fontSize } from '../../../constants/fontSize';
import { device } from '../../../constants/screenSize';

const FormSection = () => {
    return (
        <Container className='section-padding'>

            <Form>
                <input type="text" name="" id="" placeholder='First Name' />
                <input type="text" name="" id="" placeholder='Last Name' />
                <input type="email" name="" id="" placeholder='Email' />
                <input type="text" name="" id="" placeholder='Subject' />
                <textarea placeholder='Message'></textarea>
                <Submit>Submit</Submit>
            </Form>

            <InfoWraper>

                <Item>
                    <Icon>
                        <img src={mail} alt="" />
                    </Icon>
                    <Title>Inquiries</Title>
                    <Description>For any inquiries, questions or commendations, please email us at info@willcoxenergy.com or fill out the following form</Description>
                </Item>

                <Item>
                    <Icon>
                        <img src={employ} alt="" />
                    </Icon>
                    <Title>Employment</Title>
                    <Description>To apply for a job with Willcox Energy, please send a cover letter together with your C.V. to: info@willcoxenergy.com</Description>
                </Item>

            </InfoWraper>
            
        </Container>
    );
};

export default FormSection;



const Container = styled.div`
background: #FFFCF1;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 100px;
padding-top: 6rem;
padding-bottom: 6rem;

@media ${device.laptop}{
    padding-top: 5rem;
    padding-bottom: 5rem;
}
@media ${device.pad}{
    padding-top: 4rem;
    padding-bottom: 4rem;
}
@media ${device.menuMobile}{
    padding-top: 2rem;
    padding-bottom: 2rem;
    grid-template-columns: 1fr;
    gap: 40px;
}
`;


const Form = styled.form`
margin-right: -32px;

@media ${device.menuMobile}{
    margin-right: -0px;
}

input{
    display: block;
    width: 100%;
    height: 48px;
    border: 2px solid rgba(35, 35, 35, 0.3);
    border-radius: 6px;
    margin-bottom: 16px;
    background: transparent;
    font-size: ${fontSize[2]}px;
    line-height: 28px;
    padding: 0 16px;
    outline: none;
    box-sizing: border-box;
}

textarea{
    height: 160px;
    border: 2px solid rgba(35, 35, 35, 0.3);
    border-radius: 6px;
    width: 100%;
    background: transparent;
    padding: 16px;
    font-size: ${fontSize[2]}px;
    line-height: 28px;
    outline: none;
    resize: none;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}
`;


const Submit = styled.button`
height: 48px;
background: var(--theme-color);
color: #fff;
width: 100%;
text-align: center;
display: block;
padding: 0 16px;
border: none;
outline: none;
font-size: ${fontSize[2]}px;
line-height: 28px;
margin-top: 10px;
border-radius: 31px;
cursor: pointer;
`;



const InfoWraper = styled.div`
padding-right: 30%;

@media ${device.laptop}{
    padding-right: 10%;
}
@media ${device.pad}{
    padding-right: 0%;
}
@media ${device.mobileL}{
    padding-right: 24%;
}
`;

const Item = styled.div`
&:first-child{
    margin-bottom: 40px;

    @media ${device.menuMobile}{
        margin-bottom: 30px;
    }

}
`;


const Icon = styled.div`

img{
    width: 45px;
}
`;

const Title = styled.h3`
font-size: ${fontSize[6]}px;
font-weight: 700;
line-height: 133.5%;
color: var(--theme-color);
margin-bottom: 1rem;

@media ${device.pad}{
    font-size: ${fontSize[5]}px;
}
@media ${device.pad}{
    font-size: ${fontSize[3]}px;
}
`;
const Description = styled.p`
font-size: ${fontSize[3]}px;
line-height: 143.5%;

@media ${device.pad}{
    font-size: ${fontSize[2]}px;
}
@media ${device.mobileL}{
    font-size: ${fontSize[1]}px;
}
`;

