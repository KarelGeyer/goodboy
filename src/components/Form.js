import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setUserInfo } from '../redux/actions/userInfo.action';
import { connect } from 'react-redux';

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
const ContinueBttnNotActive = styled(ContinueBttn)`
  background-image: none;
  background-color: ${(props) => props.theme.color.darkGrey};
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

const Form = ({ setUserInfo, userInfo }) => {
  /**Initial consts */
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const donationValue = userInfo.userInfo.donationValue;
  const helpValue = userInfo.userInfo.helpValue;
  const shelterValue = userInfo.userInfo.shelterValue;

  /**Store Data in Redux */
  const storeData = () => {
    setUserInfo({
      helpValue: helpValue,
      shelterValue: shelterValue,
      donationValue: donationValue,
      name: name,
      surname: surname,
      email: email,
      phoneNumber: phoneNumber,
    });
  };
  return (
    <>
      <Section>
        <H1>Potrebujeme od Vás zopár informácií</H1>
        <FormWrapper>
          <BoldText>O vás</BoldText>
          <Input
            placeholder="Zadejte Vaše meno"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="Zadejte Vaše priezvisko"
            onChange={(e) => {
              setSurname(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="Zadejte Vás e-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Input>
          <Input
            placeholder="+421"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          ></Input>
        </FormWrapper>
        <ButtonWrapper>
          <Link to="/">
            <BackBttn>Spať</BackBttn>
          </Link>
          {email === '' || email === undefined ? (
            <ContinueBttnNotActive> Pokračovať </ContinueBttnNotActive>
          ) : (
            <Link to="confirm">
              <ContinueBttn onClick={storeData}>Pokračovať</ContinueBttn>
            </Link>
          )}
        </ButtonWrapper>
      </Section>
    </>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});
export default connect(mapStateToProps, { setUserInfo })(Form);
