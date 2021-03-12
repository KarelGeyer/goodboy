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
const Input = styled.input`
  height: 65px;
  width: 550px;
  border: 1px solid ${(props) => props.theme.color.lightGrey};
  border-radius: 7px;
  padding-left: 15px;
  outline: none;
  :focus {
    border: 2px solid ${(props) => props.theme.color.borderActive};
  }
`;
const FormWrapper = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
const BoldText = styled.p`
  font-weight: bold;
  align-self: flex-start;
`;

const Form = () => {
  return (
    <>
      <Section>
        <H1>Potrebujeme od Vás zopár informácií</H1>
        <FormWrapper>
          <BoldText>O vás</BoldText>
          <Input placeholder="Zadejte Vaše meno"></Input>
          <Input placeholder="Zadejte Vaše priezvisko"></Input>
          <Input placeholder="Zadejte Vás e-mail"></Input>
          <Input placeholder="+421"></Input>
        </FormWrapper>
        <ButtonWrapper>
          <Link to="/">
            <BackBttn>Spať</BackBttn>
          </Link>
          <Link to="confirm">
            <ContinueBttn>Pokračovať</ContinueBttn>
          </Link>
        </ButtonWrapper>
      </Section>
    </>
  );
};

export default Form;
