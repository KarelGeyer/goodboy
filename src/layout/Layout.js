import React from 'react';
import { Switch, Route } from 'react-router';
import styled from 'styled-components';
import ChooseHelp from '../containers/ChooseHelp';
import Confirmation from '../containers/Confirmation';
import DogPicture from '../containers/DogPicture';
import Form from '../containers/Form';
import Footer from './Footer';
import Navbar from './Navbar';

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  height: 950px;
  display: flex;
  max-width: 1200px;
  justify-content: flex-end;
  @media (max-width: 500px) {
    height: 800px;
  }
`;

const layout = () => {
  return (
    <>
      <Navbar />
      <Section>
        <Wrapper>
          <Switch>
            <Route path="/" exact component={ChooseHelp}></Route>
            <Route path="/form" exact component={Form}></Route>
            <Route path="/confirm" exact component={Confirmation}></Route>
          </Switch>
          <DogPicture />
        </Wrapper>
      </Section>
      <Footer />
    </>
  );
};

export default layout;
