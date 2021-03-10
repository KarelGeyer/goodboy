import React from 'react'
import styled from "styled-components"
import logo from "../assets/logo.png"
import logoText from "../assets/logoText.png"

const FooterSection = styled.section `
    height: 400px;
    left: 0;
    bottom: 0;
    width: 100%;
    position: fixed;
    display:flex;
    justify-content: center;
`
const FooterWrapper = styled.div `
    height: 400px;
    width: 1340px;
    border-top: 1px solid rgb(47,47,47,0.16);
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const ContentWrapper = styled.div `
    height: 180px;
    width: 13%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
`
const Logo = styled.img `
    height: 53px;
    width: 53px;
`
const LogoText = styled.img `
    height: 40px;
    margin-top: 5px;
`
const FooterBoldText = styled.p `
    font-weight:bold
`
const TextWrapper = styled.div `
    height:120px;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    text-align: start;
`

const Footer = () => {
    return (
        <>
            <FooterSection>
                <FooterWrapper>
                    <ContentWrapper>
                        <Logo src={logo} alt="logo" />
                        <LogoText src={logoText} alt="logoText" />
                    </ContentWrapper>
                    <ContentWrapper>
                        <FooterBoldText>
                            Nadácia Good boy
                        </FooterBoldText>
                        <TextWrapper>
                            <p>O projekte</p>
                            <p>Ako na to</p>
                            <p>Kontakt</p>
                        </TextWrapper>
                    </ContentWrapper>
                    <ContentWrapper>
                        <FooterBoldText>
                            Nadácia Good boy
                        </FooterBoldText>
                        <TextWrapper>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. </p>
                        </TextWrapper>
                    </ContentWrapper>
                    <ContentWrapper>
                        <FooterBoldText>
                            Nadácia Good boy
                        </FooterBoldText>
                        <TextWrapper>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. </p>
                        </TextWrapper>
                    </ContentWrapper>
                </FooterWrapper>
            </FooterSection>
        </>
    )
}

export default Footer
