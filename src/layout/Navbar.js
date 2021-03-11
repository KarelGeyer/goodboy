import React from 'react'
import styled from "styled-components"
import FbPng from "../assets/fb.png"
import IgPng from "../assets/ig.png"

const NavbarSection = styled.section `
    width: 100%;
    background-color: rgb(254,254,254,1); 
    height: 40px;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08);
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const NavbarText = styled.p `
    width: 700px;
    font-size: 0.8rem;
    font-family: sans-serif;
    color: rgb(159,159,159,1);
`
const IconsWrapper = styled.div `
    width: 400px;
    display: flex;
    justify-content: flex-start;
`
const Icon = styled.img `
    margin-left: 20px;
`

const Navbar = () => {
    return (
        <>
            <NavbarSection>
                <NavbarText>
                    Nadácia Good Boy
                </NavbarText> 
                <IconsWrapper>
                    <Icon src={FbPng} alt="FacebookIcon"></Icon>
                    <Icon src={IgPng} alt="InstagramIcon"></Icon>
                </IconsWrapper>           
            </NavbarSection>
        </>
    )
}

export default Navbar
