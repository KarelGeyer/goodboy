import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import wallet from '../assets/wallet.png';
import paw from '../assets/paw.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
  text-align: justify;
`;
const ButtonsWrapper = styled.div`
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
const Wrapper = styled.div`
  height: 110px;
  width: 560px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;
const ButtonWrapper = styled.div`
  width: 550px;
  display: flex;
  justify-content: flex-end;
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
  outline: none;
  :focus {
    background-image: ${(props) => props.theme.color.primary};
    color: white;
  }
`;
const CustomDonation = styled.input`
  height: 53px;
  min-width: 70px;
  border: 1px solid ${(props) => props.theme.color.lightGrey};
  border-radius: 5px;
  background: white;
  font-size: 1.1rem;
  font-weight: bold;
  outline: none;
  text-align: center;
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
const ContinueBttnNotActive = styled(ContinueBttn)`
  background-image: none;
  background-color: ${(props) => props.theme.color.darkGrey};
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

const ChooseHelp = ({ setUserInfo, userInfo }) => {
  /**Initial consts */
  const [clicked, setClicked] = useState(true);
  const [shelters, setShelters] = useState('');
  const [submit, setSubmit] = useState('');
  const [dropDownMenu, setDropDownMenu] = useState(true);

  /**Redux consts */
  const [helpValue, setHelpValue] = useState(
    'Chcem finančne prispieť celej nadácii',
  );
  const [shelterId, setShelderId] = useState();
  const [shelterValue, setShelterValue] = useState('');
  const [donationValue, setDonationValue] = useState();

  const showDropDownMenu = () => {
    setDropDownMenu(!dropDownMenu);
  };
  /**FCE to change color and store data to const */
  const chooseHelp = (e) => {
    setClicked(!clicked);
    setHelpValue(e.target.innerText);
  };
  /**Store a chosen shelter */
  const storeValueOnChange = (e) => {
    setShelterValue(e.target.value);
  };

  /**Store a chosen donation value */
  const storeDonationValueOnClick = (e) => {
    e.target.innerText === ''
      ? setDonationValue(e.target.value)
      : setDonationValue(e.target.innerText);
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
  console.log(shelterValue);
  return (
    <>
      <Section>
        <H1>Vyberte si možnosť, ako chcete pomôcť</H1>
        <ButtonsWrapper>
          <FirstButton onClick={chooseHelp} clicked={clicked}>
            <IconWrapper>
              <Icon src={wallet}></Icon>
            </IconWrapper>
            <BttnText>Chcem finančne prispieť konkrétnemu útulku</BttnText>
          </FirstButton>
          <SecondButton onClick={chooseHelp} clicked={clicked}>
            <IconWrapper>
              <Icon src={paw}></Icon>
            </IconWrapper>
            <BttnText>Chcem finančne prispieť celej nadácii</BttnText>
          </SecondButton>
        </ButtonsWrapper>
        <form
          onSubmit={(e) => {
            console.log(e);
            setSubmit(e);
            e.preventDefault();
          }}
        >
          <Wrapper>
            <BoldText>Najviac mi záleží na útulku</BoldText>
            {helpValue === 'Chcem finančne prispieť celej nadácii' ? (
              <Input
                onClick={showDropDownMenu}
                type="text"
                placeholder="Vyberte útulok zo zoznamu"
                list="shelters"
                onChange={storeValueOnChange}
                value={shelterValue}
              />
            ) : (
              <Input
                onClick={showDropDownMenu}
                placeholder="Vyberte útulok zo zoznamu"
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
            {/* <datalist id="shelters">
              {!!shelters ? (
                shelters.map((shelter) => {
                  return <option key={shelter.id}>{shelter.name}</option>;
                })
              ) : (
                <option>seznam sa načítá...</option>
              )}
            </datalist> */}
          </Wrapper>
          <Wrapper>
            <BoldText>Suma, ktorou chcem prispieť</BoldText>
            <DonationWrapper>
              <Donation onClick={storeDonationValueOnClick}>5</Donation>
              <Donation onClick={storeDonationValueOnClick}>10</Donation>
              <Donation onClick={storeDonationValueOnClick}>20</Donation>
              <Donation onClick={storeDonationValueOnClick}>30</Donation>
              <Donation onClick={storeDonationValueOnClick}>50</Donation>
              <Donation onClick={storeDonationValueOnClick}>100</Donation>
              <CustomDonation
                onChange={storeDonationValueOnClick}
                onClick={showDropDownMenu}
                type="text"
                placeholder="...."
              ></CustomDonation>
            </DonationWrapper>
          </Wrapper>
          <ButtonWrapper>
            {submit === '' || submit === undefined || donationValue < 1 ? (
              <ContinueBttnNotActive type="submit">
                Pokračovať
              </ContinueBttnNotActive>
            ) : (
              <Link to="/form">
                <ContinueBttn type="submit" onClick={storeDataOnConfirmation}>
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
export default connect(mapStateToProps, { setUserInfo })(ChooseHelp);
