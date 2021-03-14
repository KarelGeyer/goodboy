import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import wallet from '../assets/wallet.png';
import paw from '../assets/paw.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setUserInfo } from '../redux/actions/userInfo.action';
import { connect } from 'react-redux';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

/**Styles */
/**Section */
const Section = styled.section`
  height: 830px;
  width: 700px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
/**Fonts */
const H1 = styled.h1`
  width: 570px;
  font-size: 49px;
  font-weight: 700;
  line-height: 52px;
  text-align: start;
`;
const BoldText = styled.p`
  font-weight: bold;
`;
const BttnText = styled.div`
  text-align: start;
  font-weight: 600;
`;
/**Wrappers */
const ButtonsWrapper = styled.div`
  height: 186px;
  width: 560px;
  display: flex;
`;
const AsideWrapper = styled.div`
  width: 570px;
  height: 1px;
  display: flex;
  justify-content: space-between;
`;
const TextWrapper = styled.div`
  display: flex;
  width: 550px;
  justify-content: space-between;
`;
const ButtonWrapper = styled.div`
  height: 100px;
  width: 550px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const Wrapper = styled.div`
  height: 110px;
  width: 560px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;
const DonationWrapper = styled.div`
  display: flex;
  width: 530px;
  justify-content: space-between;
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
/**Buttons and OnClickHandelers */
const FirstButton = styled.div`
  height: 186px;
  width: 278px;
  border: 1px solid ${(props) => props.theme.color.borderActive};
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  background-image: ${(props) =>
    props.clicked ? 'none' : props.theme.color.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 25px;
  color: ${(props) => (props.clicked ? 'black' : 'white')};
  ${(props) =>
    props.clicked
      ? 'none'
      : `0px 2.767256498336792px 2.2138051986694336px 0px
    rgba(0, 0, 0, 0.0197)`};
  box-shadow: ${(props) =>
    props.clicked
      ? 'none'
      : `0px 6.650102138519287px 5.32008171081543px 0px
    rgba(0, 0, 0, 0.0283)`};
  box-shadow: ${(props) =>
    props.clicked
      ? 'none'
      : `0px 12.521552085876465px 10.017241477966309px 0px
    rgba(0, 0, 0, 0.035)`};
  box-shadow: ${(props) =>
    props.clicked
      ? 'none'
      : `0px 22.3363094329834px 17.869047164916992px 0px
    rgba(0, 0, 0, 0.0417)`};
  box-shadow: ${(props) =>
    props.clicked
      ? 'none'
      : `0px 41.777610778808594px 33.422088623046875px 0px
    rgba(0, 0, 0, 0.0503)`};
  box-shadow: ${(props) =>
    props.clicked ? 'none' : `0px 100px 80px 0px rgba(0, 0, 0, 0.07)`};
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
  color: ${(props) => (props.clicked ? 'white' : 'black')};
  background-image: ${(props) =>
    props.clicked ? props.theme.color.primary : 'none'};
  box-shadow: ${(props) =>
    props.clicked
      ? `0px 2.767256498336792px 2.2138051986694336px 0px
    rgba(0, 0, 0, 0.0197)`
      : 'none'};
  box-shadow: ${(props) =>
    props.clicked
      ? `0px 6.650102138519287px 5.32008171081543px 0px
    rgba(0, 0, 0, 0.0283);`
      : 'none'};
  box-shadow: ${(props) =>
    props.clicked
      ? `0px 12.521552085876465px 10.017241477966309px 0px
    rgba(0, 0, 0, 0.035)`
      : 'none'};
  box-shadow: ${(props) =>
    props.clicked
      ? `0px 22.3363094329834px 17.869047164916992px 0px
    rgba(0, 0, 0, 0.0417)`
      : 'none'};
  box-shadow: ${(props) =>
    props.clicked
      ? `0px 41.777610778808594px 33.422088623046875px 0px
    rgba(0, 0, 0, 0.0503)`
      : 'none'};
  box-shadow: ${(props) =>
    props.clicked ? `0px 100px 80px 0px rgba(0, 0, 0, 0.07)` : 'none'};
`;
const Donation = styled.button`
  height: 53px;
  min-width: 70px;
  border: 1px solid ${(props) => props.theme.color.lightGrey};
  border-radius: 5px;
  background: white;
  font-size: 1.1rem;
  font-weight: bold;
  outline: none;
  :focus {
    background-image: ${(props) => props.theme.color.primary};
    color: white;
  }
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
const ContinueBttnNotActive = styled(ContinueBttn)`
  background-image: none;
  background-color: ${(props) => props.theme.color.darkGrey};
`;
/**Form, Labels and Inputs */
const Form = styled.form`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Label = styled.label`
  position: absolute;
  margin-left: 15px;
  font-weight: bold;
`;
const CustomDonation = styled.input`
  height: 53px;
  min-width: 70px;
  border: 1px solid ${(props) => props.theme.color.lightGrey};
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  outline: none;
  text-align: center;
  :focus {
    background-image: ${(props) => props.theme.color.primary};
    color: white;
  }
`;
const Input = styled.input`
  height: 65px;
  width: 550px;
  border: 1px solid ${(props) => props.theme.color.lightGrey};
  border-radius: 10px;
  padding-left: 15px;
  padding-top: 15px;
`;
/**Dropdown Menu */
const DropDownMenu = styled.div`
  display: ${(props) => (props.dropDownMenu ? 'none' : 'block')};
  position: absolute;
  height: 250px;
  width: 350px;
  border: 1px solid ${(props) => props.theme.color.borderActive};
  border-right: none;
  border-radius: 15px;
  background: white;
  overflow: scroll;
  overflow-x: hidden;
  margin-top: 345px;
`;
const DropDownItem = styled.div`
  height: 40px;
  width: 350px;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 5px;
  font-weight: bold;
  border-bottom: 1px solid white;
`;
/**PageCount */
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
/**Icons & Imgs */
const Icon = styled.img``;

const ChooseHelp = ({ setUserInfo, userInfo }) => {
  /**Initial consts */
  const [clicked, setClicked] = useState(true);
  const [shelters, setShelters] = useState('');
  const [submit, setSubmit] = useState('');
  const [dropDownMenu, setDropDownMenu] = useState(true);
  const [required, setRequired] = useState('Nepovinné');
  const donation = [5, 10, 20, 30, 50, 100];
  const { t, i118n } = useTranslation();
  /**Redux consts */
  const [helpValue, setHelpValue] = useState(
    'Chcem finančne prispieť celej nadácii',
  );
  const [shelterId, setShelderId] = useState();
  const [shelterValue, setShelterValue] = useState('');
  const [donationValue, setDonationValue] = useState();
  /**FCE to handle DropDown Menu */
  const showDropDownMenu = () => {
    setDropDownMenu(!dropDownMenu);
  };
  /**FCE to change color and store data to const */
  const chooseHelp = (e) => {
    setClicked(!clicked);
    setHelpValue(e.target.innerText);
    setRequired(clicked === false ? 'Nepovinné' : 'Povinné');
  };
  /**Store a chosen shelter */
  const storeValueOnChange = (e) => {
    setShelterValue(e.target.value);
  };

  /**Store a chosen donation value */
  const storeDonationValueOnClick = (e) => {
    setDonationValue(e.target.value);
  };
  /**GET response from API */
  useEffect(() => {
    axios
      .get('https://frontend-assignment-api.goodrequest.com/api/v1/shelters')
      .then((res) => {
        setShelters(res.data.shelters);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  /**Store data in Redux upon confirmation */
  const storeDataOnConfirmation = () => {
    setUserInfo({
      helpValue: helpValue,
      shelterValue: shelterValue,
      donationValue: donationValue,
      shelterID: shelterId,
      name: '',
      surname: '',
      email: '',
      phoneNumber: '',
    });
  };
  /**Language handeler */
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <Section>
        <AsideWrapper>
          <PageCountWrapper>
            <PageCountActive />
            <PageCount />
            <PageCount />
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
        <H1>{t('chooseHelp.title')}</H1>

        <ButtonsWrapper>
          <FirstButton onClick={chooseHelp} clicked={clicked}>
            <IconWrapper>
              <Icon src={wallet}></Icon>
            </IconWrapper>
            <BttnText>{t('chooseHelp.howToHelp.firstBttn')}</BttnText>
          </FirstButton>
          <SecondButton onClick={chooseHelp} clicked={clicked}>
            <IconWrapper>
              <Icon src={paw}></Icon>
            </IconWrapper>
            <BttnText>{t('chooseHelp.howToHelp.secondBttn')}</BttnText>
          </SecondButton>
        </ButtonsWrapper>
        <Form
          onSubmit={(e) => {
            setSubmit(e);
            e.preventDefault();
          }}
        >
          <Wrapper>
            <TextWrapper>
              <BoldText>{t('chooseHelp.chooseShelter')}</BoldText>
              <BoldText>{required}</BoldText>
            </TextWrapper>

            <Label>{t('chooseHelp.shelter')}</Label>
            {helpValue === 'Chcem finančne prispieť celej nadácii' ||
            helpValue === 'Chtěl bych  finančně přispět celé nadaci' ? (
              <Input
                onClick={showDropDownMenu}
                type="text"
                placeholder={t('chooseHelp.chooseShelterDrpdwn')}
                list="shelters"
                onChange={storeValueOnChange}
                value={shelterValue}
              />
            ) : (
              <Input
                onClick={showDropDownMenu}
                placeholder={t('chooseHelp.chooseShelterDrpdwn')}
                list="shelters"
                onChange={storeValueOnChange}
                required
                value={shelterValue}
              ></Input>
            )}
            <DropDownMenu dropDownMenu={dropDownMenu}>
              {!!shelters ? (
                shelters.map((shelter) => {
                  return (
                    <DropDownItem
                      key={shelter.id}
                      onClick={() => {
                        setShelterValue(shelter.name);
                        setShelderId(shelter.id);
                        setDropDownMenu(true);
                      }}
                    >
                      {shelter.name}
                    </DropDownItem>
                  );
                })
              ) : (
                <option>seznam sa načítá...</option>
              )}
            </DropDownMenu>
          </Wrapper>
          <Wrapper>
            <BoldText>{t('chooseHelp.donation')}</BoldText>
            <DonationWrapper>
              {donation.map((val) => {
                return (
                  <Donation
                    onClick={() => {
                      setDonationValue(val);
                    }}
                  >
                    {val} &euro;
                  </Donation>
                );
              })}
              <CustomDonation
                onChange={storeDonationValueOnClick}
                type="text"
                placeholder=".... &euro;"
              ></CustomDonation>
            </DonationWrapper>
          </Wrapper>
          <ButtonWrapper>
            {submit === '' || submit === undefined || donationValue < 1 ? (
              <ContinueBttnNotActive type="submit">
                {t('chooseHelp.button')}
              </ContinueBttnNotActive>
            ) : (
              <Link to="/form">
                <ContinueBttn type="submit" onClick={storeDataOnConfirmation}>
                  {t('chooseHelp.button')}
                </ContinueBttn>
              </Link>
            )}
          </ButtonWrapper>
        </Form>
      </Section>
    </>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});
export default connect(mapStateToProps, { setUserInfo })(ChooseHelp);
