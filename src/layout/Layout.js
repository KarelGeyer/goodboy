import React from 'react';
import styled from 'styled-components';
import ChooseHelp from '../components/ChooseHelp';
import DogPicture from '../components/DogPicture';
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
  width: 1200px;
  border: 1px solid black;
  justify-content: flex-end;
`;

const layout = () => {
  return (
    <>
      <Navbar />
      <Section>
        <Wrapper>
          <ChooseHelp></ChooseHelp>
          <DogPicture></DogPicture>
        </Wrapper>
      </Section>
      <Footer />
    </>
  );
};

export default layout;
