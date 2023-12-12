import React from 'react';
import styled from 'styled-components';
import Banner from '../common/Banner';

const DocumentComponentBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.img`
  max-width: 90%;
  height: auto;
`;

const ProductManual = ({}) => {
  return (
    <DocumentComponentBlock>
      <Banner />
      <ImageWrapper src={"/images/document/product_manual (1).jpg"} />
      <ImageWrapper src={"/images/document/product_manual (2).jpg"} />
      <ImageWrapper src={"/images/document/product_manual (3).jpg"} />
      <ImageWrapper src={"/images/document/product_manual (4).jpg"} />
      <ImageWrapper src={"/images/document/product_manual (5).jpg"} />
      <ImageWrapper src={"/images/document/product_manual (6).jpg"} />
    </DocumentComponentBlock>
  );
};

export default ProductManual;