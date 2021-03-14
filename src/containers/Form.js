import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setUserInfo } from '../redux/actions/userInfo.action';
import { connect } from 'react-redux';
import CzIcon from '../assets/czech.png';
import SkIcon from '../assets/slovakia.png';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Section = styled.section`
  height: 650px;
  width: 700px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  height: 70px;
  width: 550px;
  border: 1px solid ${(props) => props.theme.color.lightGrey};
  border-radius: 7px;
  padding-left: 15px;
  padding-top: 15px;
  outline: none;
  :focus {
    border: 2px solid ${(props) => props.theme.color.borderActive};
  }
`;
const LabelForMeno = styled.label`
  position: absolute;
  margin-left: 15px;
  margin-top: 50px;
  font-weight: bold;
`;
const LabelForPriezvisko = styled(LabelForMeno)`
  margin-top: 140px;
`;
const LabelForEmail = styled(LabelForMeno)`
  margin-top: 230px;
`;
const LabelForPhone = styled(LabelForMeno)`
  margin-top: 320px;
`;
const PhoneNumWrapper = styled.div`
  height: 65px;
  width: 550px;
  display: flex;
`;
const PhoneNumCountry = styled.div`
  height: 65px;
  width: 100px;
  border: ${(props) =>
    props.focus
      ? `1px solid ${props.theme.color.lightGrey}`
      : `2px solid ${props.theme.color.borderActive}`};
  border-right: none;
  border-radius: 7px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-left: 5px;
  padding-top: 15px;
  outline: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const PhoneNumType = styled.input`
  height: 65px;
  width: 450px;
  border: ${(props) =>
    props.focus
      ? `1px solid ${props.theme.color.lightGrey}`
      : `2px solid ${props.theme.color.borderActive}`};
  border-left: none;
  border-radius: 7px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding-left: 15px;
  padding-top: 15px;
  outline: none;
`;
const FlagIcon = styled.img`
  height: 30px;
  width: 30px;
  background: ${SkIcon};
`;

const FormWrapper = styled.div`
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const ButtonWrapper = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const ContinueBttn = styled.button`
  height: 53px;
  width: 126px;
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
const Forms = styled.form`
  height: 490px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  const [srcHandeler, setSrcHandeler] = useState(false);
  const [countryFlag, setCountryFlag] = useState(SkIcon);
  const [countryNum, setCountryNum] = useState('+421');
  const [focus, setFocus] = useState(true);
  const donationValue = userInfo.userInfo.donationValue;
  const helpValue = userInfo.userInfo.helpValue;
  const shelterValue = userInfo.userInfo.shelterValue;
  const shelterId = userInfo.userInfo.shelterID;
  console.log(userInfo);
  const settingFocus = () => {
    setFocus(false);
  };
  const settingFocusBack = () => {
    setFocus(true);
  };
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
      shelterID: shelterId,
      name: name,
      surname: surname,
      email: email,
      phoneNumber: phoneNumber,
    });
  };
  const { t, i118n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  console.log(userInfo.userInfo.shelterID);
  return (
    <>
      <button onClick={() => changeLanguage('cz')}>CZ</button>
      <button onClick={() => changeLanguage('sk')}>SK</button>
      <Section>
        <H1>{t('form.title')}</H1>
        <Forms
          onChange={(e) => {}}
          onSubmit={(e) => {
            setSubmit(e);
            e.preventDefault();
          }}
        >
          <FormWrapper>
            <BoldText>O vás</BoldText>
            <LabelForMeno>{t('form.name')}</LabelForMeno>
            <Input
              placeholder={t('form.addName')}
              pattern="[A-Za-z]{2,20}"
              title={t('form.inputTitles.first')}
              onChange={(e) => {
                setName(e.target.value);
              }}
              onClick={settingFocusBack}
            ></Input>
            <LabelForPriezvisko>{t('form.surname')}</LabelForPriezvisko>
            <Input
              required
              pattern="[A-Za-zřťščďžňŘŤŠĎŽČŇéúíóáýÉÚÍÓÁÝůŮ]{2,30}"
              title={t('form.inputTitles.second')}
              placeholder={t('form.addSurname')}
              onChange={(e) => {
                setSurname(e.target.value);
              }}
              onClick={settingFocusBack}
            ></Input>
            <LabelForEmail>E-mailová adresa</LabelForEmail>

            <Input
              type="email"
              placeholder="Zadejte Váš e-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onClick={settingFocusBack}
            ></Input>
            <LabelForPhone>{t('form.phone')}</LabelForPhone>
            <PhoneNumWrapper>
              <PhoneNumCountry onClick={settingFocus} focus={focus} type="text">
                <FlagIcon
                  src={countryFlag}
                  alt=""
                  onClick={changeCountry}
                ></FlagIcon>
                <BoldText>{countryNum}</BoldText>
              </PhoneNumCountry>
              <PhoneNumType
                focus={focus}
                type="tel"
                pattern="[0-9]{9}"
                onClick={settingFocus}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              ></PhoneNumType>
            </PhoneNumWrapper>
          </FormWrapper>
          <ButtonWrapper>
            <Link to="/">
              <BackBttn>{t('form.backBttn')}</BackBttn>
            </Link>
            {submit === '' || submit === undefined ? (
              <ContinueBttnNotActive type="submit" onClick={settingFocusBack}>
                {t('form.confirm')}
              </ContinueBttnNotActive>
            ) : (
              <Link to="confirm">
                <ContinueBttn
                  type="submit"
                  onClick={() => {
                    storeData();
                    settingFocusBack();
                  }}
                >
                  {t('form.next')}
                </ContinueBttn>
              </Link>
            )}
          </ButtonWrapper>
        </Forms>
      </Section>
    </>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});
export default connect(mapStateToProps, { setUserInfo })(Form);
