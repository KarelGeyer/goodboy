import React from 'react';
import styled from 'styled-components';
import wallet from '../assets/wallet.png';
import paw from '../assets/paw.png';

const Section = styled.section`
  height: 800px;
  width: 800px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const H1 = styled.h1`
  width: 570px;
  font-size: 49px;
  font-weight: 700;
  line-height: 52px;
  text-align: justify;
`;
const ButtonWrapper = styled.div`
  height: 186px;
  width: 560px;
  display: flex;
`;
const FirstButton = styled.div`
  height: 186px;
  width: 278px;
  border: 1px solid ${(props) => props.theme.color.borderActive};
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  background-image: ${(props) => props.theme.color.lightGrey};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 25px;
`;
const SecondButton = styled.div`
  height: 186px;
  width: 278px;
  border: 1px solid ${(props) => props.theme.color.borderActive};
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 25px;
  color: white;
  background-image: ${(props) => props.theme.color.primary};
  box-shadow: 0px 2.767256498336792px 2.2138051986694336px 0px
    rgba(0, 0, 0, 0.0197);
  box-shadow: 0px 6.650102138519287px 5.32008171081543px 0px
    rgba(0, 0, 0, 0.0283);
  box-shadow: 0px 12.521552085876465px 10.017241477966309px 0px
    rgba(0, 0, 0, 0.035);
  box-shadow: 0px 22.3363094329834px 17.869047164916992px 0px
    rgba(0, 0, 0, 0.0417);
  box-shadow: 0px 41.777610778808594px 33.422088623046875px 0px
    rgba(0, 0, 0, 0.0503);
  box-shadow: 0px 100px 80px 0px rgba(0, 0, 0, 0.07);
`;
const Wrapper = styled.div`
  height: 110px;
  width: 560px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;
const BoldText = styled.p`
  font-weight: bold;
`;
const BttnText = styled.div`
  width: 175px;
  text-align: justify;
`;
const Input = styled.input`
  height: 65px;
  width: 550px;
  border: 1px solid ${(props) => props.theme.color.lightGrey};
  border-radius: 10px;
  padding-left: 15px;
`;

const DonationWrapper = styled.div`
  display: flex;
  width: 530px;
  justify-content: space-between;
`;
const Donation = styled.button`
  height: 53px;
  min-width: 70px;
  border: 1px solid ${(props) => props.theme.color.lightGrey};
  border-radius: 5px;
  background: white;
  font-size: 1.1rem;
  font-weight: bold;
`;
const ContinueBttn = styled.button`
  height: 53px;
  width: 116px;
  align-self: flex-end;
  margin-right: 100px;
  background-image: ${(props) => props.theme.color.primary};
  border: none;
  border-radius: 100px;
  color: white;
  font-weight: 800;
  font-size: 0.8rem;
`;
const IconWrapper = styled.div`
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.darkerGrey};
  border-radius: 50%;
`;
const Icon = styled.img``;

const ChooseHelp = () => {
  return (
    <>
      <Section>
        <H1>Vyberte si možnosť, ako chcete pomôcť</H1>
        <ButtonWrapper>
          <FirstButton>
            <IconWrapper>
              <Icon src={wallet}></Icon>
            </IconWrapper>
            <BttnText>Chcem finančne prispieť konkrétnemu útulku</BttnText>
          </FirstButton>
          <SecondButton>
            <IconWrapper>
              <Icon src={paw}></Icon>
            </IconWrapper>
            <BttnText>Chcem finančne prispieť celej nadácii</BttnText>
          </SecondButton>
        </ButtonWrapper>
        <Wrapper>
          <BoldText>Najviac mi záleží na útulku</BoldText>
          <Input type="text" placeholder="Vyberte útulok zo zoznamu"></Input>
        </Wrapper>
        <Wrapper>
          <BoldText>Suma, ktorou chcem prispieť</BoldText>
          <DonationWrapper>
            <Donation>5 E</Donation>
            <Donation>10 E</Donation>
            <Donation>20 E</Donation>
            <Donation>30 E</Donation>
            <Donation>50 E</Donation>
            <Donation>100 E</Donation>
            <Donation>......E</Donation>
          </DonationWrapper>
        </Wrapper>
        <ContinueBttn>Pokračovať</ContinueBttn>
      </Section>
    </>
  );
};

export default ChooseHelp;
