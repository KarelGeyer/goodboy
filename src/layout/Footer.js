import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const FooterSection = styled.section`
  height: 350px;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 520px) {
    height: 500px;
  }
`;
const FooterWrapper = styled.div`
  height: 350px;
  width: 90%;
  border-top: 1px solid rgb(47, 47, 47, 0.16);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 850px) {
    align-items: flex start;
    flex-wrap: wrap;
  }
  @media (max-width: 750px) {
    width: 70%;
    padding-top: 25px;
  }
  @media (max-width: 520px) {
    width: 50%;
    justify-content: center;
    height: 500px;
  }
`;
const ContentWrapper = styled.div`
  height: 140px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 750px) {
    text-align: center;
    align-items: center;
  }
`;
const ContentWrapperLogo = styled.div`
  height: 140px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 750px) {
    height: 70px;
  }
`;
const Logo = styled.img`
  height: 45px;
`;

const FooterBoldText = styled.p`
  font-weight: bold;
`;
const FooterText = styled.p`
  line-height: 1.1;
`;

const TextWrapper = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  text-align: start;
  @media (max-width: 750px) {
    text-align: center;
    align-items: center;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterWrapper>
          <ContentWrapperLogo>
            <Logo src={logo} alt="logo" />
          </ContentWrapperLogo>
          <ContentWrapper>
            <FooterBoldText>Nadácia Good boy</FooterBoldText>
            <TextWrapper>
              <FooterText>O projekte</FooterText>
              <FooterText>Ako na to</FooterText>
              <FooterText>Kontakt</FooterText>
            </TextWrapper>
          </ContentWrapper>
          <ContentWrapper>
            <FooterBoldText>Nadácia Good boy</FooterBoldText>
            <TextWrapper>
              <FooterText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in interdum ipsum, sit amet.{' '}
              </FooterText>
            </TextWrapper>
          </ContentWrapper>
          <ContentWrapper>
            <FooterBoldText>Nadácia Good boy</FooterBoldText>
            <TextWrapper>
              <FooterText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in interdum ipsum, sit amet.{' '}
              </FooterText>
            </TextWrapper>
          </ContentWrapper>
        </FooterWrapper>
      </FooterSection>
    </>
  );
};

export default Footer;
