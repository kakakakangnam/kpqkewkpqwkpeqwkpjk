import React from 'react';
import styled from 'styled-components';
import Banner from '../common/Banner';

const LexanComponentBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.img`
  margin-top: 2rem;
  max-width: 90%;
  height: auto;
`;

const SashAccessory = ({}) => {
  return (
    <LexanComponentBlock>
      <Banner />
      <ImageWrapper src={"/images/lexan/lexan.jpg"} />
    </LexanComponentBlock>
  );
};

export default SashAccessory;