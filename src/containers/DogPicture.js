import React from 'react';
import styled from 'styled-components';
import DogImg from '../assets/dog.png';

const DogSection = styled.section`
  height: 950px;
  width: 400px;
  border: 1px solid black;
  display: flex;
  align-items: center;
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
