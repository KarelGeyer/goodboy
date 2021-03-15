import React from 'react';
import styled from 'styled-components';
import DogImg from '../assets/dog.png';

const DogSection = styled.section`
  height: 950px;
  width: 400px;
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const Img = styled.img``;

const DogPicture = () => {
  return (
    <>
      <DogSection>
        <Img src={DogImg}></Img>
      </DogSection>
    </>
  );
};

export default DogPicture;
