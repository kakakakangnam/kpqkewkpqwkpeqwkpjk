import React from 'react';
import styled from 'styled-components';

const IndexComponentBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const MainImageWrapper = styled.img`
  width: 100%;
  // object-fit: contain;
`;

const AdditionalInfo = styled.img`
  margin-top: 3rem;
  // width: 30%;
`;

const IndexComponent = () => {
  return (
    <IndexComponentBlock>
      <MainImageWrapper src="/images/index/vis_1.jpg" alt="대문" />
      <AdditionalInfo src="/images/index/doorisimportant.png" alt="" />
    </IndexComponentBlock>
  );
};

export default IndexComponent;