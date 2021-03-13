import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setUserInfo } from '../redux/actions/userInfo.action';
import { connect } from 'react-redux';
import CzIcon from '../assets/czech.png';
import SkIcon from '../assets/slovakia.png';

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
const PhoneNumWrapper = styled.div`
  height: 65px;
  width: 550px;
  display: flex;
`;
const PhoneNumCountry = styled.div`
  height: 65px;
  width: 100px;
  border: 1px solid ${(props) => props.theme.color.lightGrey};
  border-right: none;
  border-radius: 7px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-left: 15px;
  outline: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  :focus {
    border: 2px solid ${(props) => props.theme.color.borderActive};
  }
`;
const PhoneNumType = styled.input`
  height: 65px;
  width: 450px;
  border: 1px solid ${(props) => props.theme.color.lightGrey};
  border-left: none;
  border-radius: 7px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding-left: 15px;
  outline: none;
  :focus {
    border: 2px solid ${(props) => props.theme.color.borderActive};
  }
`;
const FlagIcon = styled.img`
  height: 30px;
  width: 30px;
  background: ${SkIcon};
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
  background-image: ${(props) => props.theme.color.primary};
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
`;

const Form = ({ setUserInfo, userInfo }) => {
  /**Initial consts */
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [submit, setSubmit] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [srcHandeler, setSrcHandeler] = useState(true);
  const [countryFlag, setCountryFlag] = useState(SkIcon);
  const [countryNum, setCountryNum] = useState('+421');
  const donationValue = userInfo.userInfo.donationValue;
  const helpValue = userInfo.userInfo.helpValue;
  const shelterValue = userInfo.userInfo.shelterValue;

  const changeCountry = () => {
    setSrcHandeler(!srcHandeler);
    if (srcHandeler === true) {
      setCountryNum('+421');
      setCountryFlag(SkIcon);
    } else {
      setCountryNum('+420');
      setCountryFlag(CzIcon);
    }
  };
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
  console.log(phoneNumber);
  return (
    <>
      <Section>
        <H1>Potrebujeme od Vás zopár informácií</H1>
        <form
          onChange={(e) => {}}
          onSubmit={(e) => {
            setSubmit(e);
            e.preventDefault();
          }}
        >
          <FormWrapper>
            <BoldText>O vás</BoldText>
            <Input
              placeholder="Zadejte Vaše meno"
              pattern="[A-Za-z]{2,20}"
              title="Jméno musí obsahovat 2 až 20 znaků, zadejte prosím Vaše jméno v platném formátu"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></Input>
            <Input
              required
              pattern="[A-Za-z]{2,30}"
              title="Příjmení musí obsahovat 2 až 30 znaků, zadejte prosím Vaše příjmení v platném formátu"
              placeholder="Zadejte Vaše priezvisko"
              onChange={(e) => {
                setSurname(e.target.value);
              }}
            ></Input>
            <Input
              type="email"
              placeholder="Zadejte Vás e-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></Input>
            <PhoneNumWrapper>
              <PhoneNumCountry type="text">
                <FlagIcon
                  src={countryFlag}
                  alt=""
                  onClick={changeCountry}
                ></FlagIcon>
                <BoldText>{countryNum}</BoldText>
              </PhoneNumCountry>
              <PhoneNumType
                type="tel"
                pattern="[0-9]{9}"
                onChange={(e) => {
                  setPhoneNumber(parseInt(countryNum) + e.target.value);
                }}
              ></PhoneNumType>
            </PhoneNumWrapper>
          </FormWrapper>
          <ButtonWrapper>
            <Link to="/">
              <BackBttn>Spať</BackBttn>
            </Link>
            {submit === '' || submit === undefined ? (
              <ContinueBttnNotActive type="submit">
                Potvrdit
              </ContinueBttnNotActive>
            ) : (
              <Link to="confirm">
                <ContinueBttn
                  type="submit"
                  onClick={() => {
                    storeData();
                  }}
                >
                  Pokračovať
                </ContinueBttn>
              </Link>
            )}
          </ButtonWrapper>
        </form>
      </Section>
    </>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});
export default connect(mapStateToProps, { setUserInfo })(Form);
