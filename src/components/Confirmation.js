import React from 'react';
import styled from 'styled-components';

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
  text-align: start;
`;
const FormWrapper = styled.div`
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TextWrapper = styled.div`
  width: 570px;
  height: 60px;
  text-align: start;
`;
const BoldText = styled.p`
  font-weight: bold;
  align-self: flex-start;
  line-height: 1.5;
`;
const CheckerWrapper = styled.div`
  width: 570px;
  display: flex;
  align-items: center;
`;
const Checker = styled.input`
  height: 30px;
  width: 30px;
  border: 1px solid white;
  border-radius: 25px;
  align-self: start;
  margin-right: 15px;
`;
const ButtonWrapper = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
`;
const ContinueBttn = styled.button`
  height: 53px;
  width: 116px;
  background-color: ${(props) => props.theme.color.darkGrey};
  border: none;
  border-radius: 100px;
  color: white;
  font-weight: 800;
  font-size: 0.8rem;
`;
const BackBttn = styled.button`
  height: 53px;
  width: 73px;
  background-color: ${(props) => props.theme.color.terciary};
  border: none;
  border-radius: 100px;
  color: black;
  font-weight: 800;
  font-size: 0.8rem;
`;

const Confirmation = () => {
  return (
    <>
      <Section>
        <H1>Skontrolujte si zadané údaje</H1>
        <FormWrapper>
          <TextWrapper>
            <BoldText>Akou formou chcem pomocť</BoldText>
            <p>Chcem finančne prispět celej nadácii</p>
          </TextWrapper>
          <TextWrapper>
            <BoldText>Najviac mi záleží na útulku</BoldText>
            <p>Mestský útulok, Žilina</p>
          </TextWrapper>
          <TextWrapper>
            <BoldText>Suma, ktorou chcem pomocť</BoldText>
            <p>50 E</p>
          </TextWrapper>
          <TextWrapper>
            <BoldText>Meno a priezvisko</BoldText>
            <p>Petr Reguli</p>
          </TextWrapper>
          <TextWrapper>
            <BoldText>E-mailová adresa</BoldText>
            <p>petr.reguli@goodrequest.com</p>
          </TextWrapper>
          <TextWrapper>
            <BoldText>Telefónne číslo</BoldText>
            <p>+421 902 237 207</p>
          </TextWrapper>
        </FormWrapper>
        <CheckerWrapper>
          <Checker type="checkbox"></Checker>
          <p>Súhlasím so spracování mojich osobných údajou</p>
        </CheckerWrapper>

        <ButtonWrapper>
          <BackBttn>Spať</BackBttn>
          <ContinueBttn>Pokračovať</ContinueBttn>
        </ButtonWrapper>
      </Section>
    </>
  );
};

export default Confirmation;
