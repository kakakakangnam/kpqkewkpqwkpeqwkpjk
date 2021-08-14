import React from 'react';
import styled from 'styled-components';

const DescriptionBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const ImageWrapper = styled.img`
  height: 50%;
`;

const TitleWrapper = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`;

const FiredoorDescription = ({ match }) => {
  const { title } = match.params;
  return (
    <DescriptionBlock>
      <ImageWrapper src={"/images/firedoor/" + title + ".jpg"} />
      <TitleWrapper>{title.replace("_", " ")}</TitleWrapper>
    </DescriptionBlock>
  );
};

export default FiredoorDescription;