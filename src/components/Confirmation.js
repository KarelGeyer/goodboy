import React from 'react';
import { Link } from 'react-router-dom';
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
  font-weight: 800;
  align-self: flex-start;
  line-height: 1.5;
`;
const Text = styled.p`
  font-weight: 500;
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
  outline: none;
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
  outline: none;
`;

const Confirmation = () => {
  return (
    <>
      <Section>
        <H1>Skontrolujte si zadané údaje</H1>
        <FormWrapper>
          <TextWrapper>
            <BoldText>Akou formou chcem pomocť</BoldText>
            <Text>Chcem finančne prispět celej nadácii</Text>
          </TextWrapper>
          <TextWrapper>
            <BoldText>Najviac mi záleží na útulku</BoldText>
            <Text>Mestský útulok, Žilina</Text>
          </TextWrapper>
          <TextWrapper>
            <BoldText>Suma, ktorou chcem pomocť</BoldText>
            <Text>50 E</Text>
          </TextWrapper>
          <TextWrapper>
            <BoldText>Meno a priezvisko</BoldText>
            <Text>Petr Reguli</Text>
          </TextWrapper>
          <TextWrapper>
            <BoldText>E-mailová adresa</BoldText>
            <Text>petr.reguli@goodrequest.com</Text>
          </TextWrapper>
          <TextWrapper>
            <BoldText>Telefónne číslo</BoldText>
            <Text>+421 902 237 207</Text>
          </TextWrapper>
        </FormWrapper>
        <CheckerWrapper>
          <Checker type="checkbox"></Checker>
          <Text>Súhlasím so spracování mojich osobných údajou</Text>
        </CheckerWrapper>

        <ButtonWrapper>
          <Link to="form">
            <BackBttn>Spať</BackBttn>
          </Link>
          <ContinueBttn>Potvrdit</ContinueBttn>
        </ButtonWrapper>
      </Section>
    </>
  );
};

export default Confirmation;
