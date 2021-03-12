import React from 'react';
import { Switch, Route } from 'react-router';
import styled from 'styled-components';
import ChooseHelp from '../components/ChooseHelp';
import Confirmation from '../components/Confirmation';
import DogPicture from '../components/DogPicture';
import Form from '../components/Form';
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
  border: 1px solid black;
  justify-content: flex-end;
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
