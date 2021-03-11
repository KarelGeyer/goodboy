import React from 'react';
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
          {/* <ChooseHelp></ChooseHelp> */}
          {/* <Form></Form> */}
          <Confirmation></Confirmation>
          <DogPicture></DogPicture>
        </Wrapper>
      </Section>
      <Footer />
    </>
  );
};

export default layout;
