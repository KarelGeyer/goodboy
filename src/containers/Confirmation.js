import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setUserInfo } from '../redux/actions/userInfo.action';
import { connect } from 'react-redux';
import axios from 'axios';
import checker from '../assets/checker.jpg';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Section = styled.section`
  height: 800px;
  width: 700px;
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
const H2 = styled.h2`
  width: 570px;
  font-size: 29px;
  font-weight: 700;
  line-height: 52px;
  text-align: start;
`;
const FormWrapper = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TextWrapper = styled.div`
  width: 500px;
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
  height: 60px;
  width: 500px;
  display: flex;
  align-items: flex-start;
`;
const Form = styled.form`
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Checker = styled.input`
  height: 30px;
  width: 30px;
  border-radius: 25px;
  align-self: start;
  margin-right: 15px;
  ::after {
    content: '';
    height: 30px;
    width: 30px;
    display: inline-block;
    background-color: white;
    border: 1px solid black;
    background-image: url(${(props) => (props.checked ? checker : 'none')});
    background-size: 28px;
    background-repeat: no-repeat;
  }
`;
const ButtonWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
`;
const ContinueBttn = styled.button`
  height: 53px;
  width: 150px;
  background-color: ${(props) =>
    props.active ? props.theme.color.darkGrey : 'none'};
  background-image: ${(props) =>
    props.active ? 'none' : props.theme.color.primary};
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
const ConfirmationMsg = styled.div`
  position: absolute;
  height: 300px;
  width: 600px;
  background-color: ${(props) => props.theme.color.terciary};
  padding: 25px;
  padding-top: 0px;
  border: 5px solid ${(props) => props.theme.color.borderActive};
  border-radius: 25px;
  display: ${(props) => (props.succes ? 'flex' : 'none')};
  justify-content: space-evenly;
  flex-direction: column;
`;
const ErrorMsg = styled.div`
  position: absolute;
  height: 300px;
  width: 600px;
  background-color: ${(props) => props.theme.color.terciary};
  padding: 25px;
  padding-top: 0px;
  border: 2px solid ${(props) => props.theme.color.borderActive};
  border-radius: 25px;
  display: ${(props) => (props.error ? 'flex' : 'none')};
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
const AsideWrapper = styled.div`
  width: 570px;
  height: 1px;
  display: flex;
  justify-content: space-between;
`;
const PageCount = styled.div`
  height: 8px;
  width: 25px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.color.darkerGrey};
`;
const PageCountActive = styled(PageCount)`
  width: 50px;
  background-image: ${(props) => props.theme.color.primary};
`;
const PageCountWrapper = styled.div`
  width: 110px;
  display: flex;
  justify-content: space-between;
`;
const TranslateHandleWraper = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
`;
const TranslateBttn = styled.button`
  height: 25px;
  width: 50px;
  background-image: ${(props) => props.theme.color.primary};
  border: 1px solid black;
  border-radius: 100px;
  outline: none;
  :focus {
    outline: none;
  }
`;

const Confirmation = ({ setUserInfo, userInfo }) => {
  /**Initial Consts */
  userInfo = userInfo.userInfo;
  const donationValue = userInfo.donationValue;
  const helpValue = userInfo.helpValue;
  const shelterValue = userInfo.shelterValue;
  const userName = userInfo.name;
  const userSurname = userInfo.surname;
  const email = userInfo.email;
  const phoneNumber = userInfo.phoneNumber;
  const shelterId = userInfo.shelterID;
  const [checked, setChecked] = useState(false);
  const [active, setActive] = useState(true);
  const [succes, setSucces] = useState(false);
  const [error, setError] = useState(false);

  const CheckHandeler = () => {
    setChecked(!checked);
    setActive(!active);
  };
  const closeMessage = () => {
    setError(false);
  };
  /**POST data in API */
  const confirmInfo = () => {
    axios
      .post(
        'https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute',
        {
          firstName: userName,
          lastName: userSurname,
          email: email,
          value: donationValue,
          phone: phoneNumber,
          shelterIDoptional: shelterId,
        },
      )
      .then((res) => {
        console.log(res);
        setSucces(true);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
  const { t, i118n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  console.log(userInfo);
  return (
    <>
      <Section>
        <AsideWrapper>
          <PageCountWrapper>
            <PageCount />
            <PageCount />
            <PageCountActive />
          </PageCountWrapper>
          <TranslateHandleWraper>
            <TranslateBttn onClick={() => changeLanguage('cz')}>
              CZ
            </TranslateBttn>
            <TranslateBttn onClick={() => changeLanguage('sk')}>
              SK
            </TranslateBttn>
          </TranslateHandleWraper>
        </AsideWrapper>
        <H1>{t('confirm.title')}</H1>
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormWrapper>
            <TextWrapper>
              <BoldText>{t('confirm.howToHelp')}</BoldText>
              <Text>{helpValue}</Text>
            </TextWrapper>
            <TextWrapper>
              <BoldText>{t('confirm.chooseShelter')}</BoldText>
              <Text>{shelterValue}</Text>
            </TextWrapper>
            <TextWrapper>
              <BoldText>{t('confirm.donation')}</BoldText>
              <Text>{donationValue}</Text>
            </TextWrapper>
            <TextWrapper>
              <BoldText>{t('confirm.nameAndSurname')}</BoldText>
              <Text>
                {userName} {userSurname}
              </Text>
            </TextWrapper>
            <TextWrapper>
              <BoldText>E-mailová adresa</BoldText>
              <Text>{email}</Text>
            </TextWrapper>
            <TextWrapper>
              <BoldText>{t('confirm.phone')}</BoldText>
              <Text>{phoneNumber}</Text>
            </TextWrapper>
          </FormWrapper>
          <CheckerWrapper>
            <Checker
              type="checkbox"
              required
              checked={checked}
              onClick={CheckHandeler}
              readOnly
            ></Checker>
            <p>{t('confirm.GDPR')}</p>
          </CheckerWrapper>
          <ButtonWrapper>
            <Link to="form">
              <BackBttn>{t('confirm.backBttn')}</BackBttn>
            </Link>
            {checked === false ? (
              <ContinueBttn type="submit" active={active}>
                {t('confirm.send')}
              </ContinueBttn>
            ) : (
              <ContinueBttn type="submit" onClick={confirmInfo} active={active}>
                {t('confirm.send')}
              </ContinueBttn>
            )}
          </ButtonWrapper>
        </Form>
        <ConfirmationMsg succes={succes}>
          <H1>{t('confirm.confirmMsg')}</H1>
          <Link to="/">
            <ContinueBttn>{t('confirm.confirmMsgBttn')}</ContinueBttn>
          </Link>
        </ConfirmationMsg>
        <ErrorMsg error={error}>
          <H1>{t('confirm.errorMsgH1')}</H1>
          <H2>{t('confirm.errorMsgH2')}</H2>
          <ContinueBttn onClick={closeMessage}>
            {t('confirm.close')}
          </ContinueBttn>
        </ErrorMsg>
      </Section>
    </>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});
export default connect(mapStateToProps, { setUserInfo })(Confirmation);
