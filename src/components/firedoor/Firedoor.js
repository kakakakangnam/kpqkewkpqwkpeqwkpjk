import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-medium-image-zoom';
import { Link } from 'react-router-dom';
import 'react-medium-image-zoom/dist/styles.css'

// const FiredoorBlock = styled(Link)`
const FiredoorBlock = styled.div`
  border: 1px solid lightgray;
  // border-radius: 20px;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    background: beige;
    .title {
      color: black;
    }
  }
`;

const TitleWrapper = styled.div`
  font-size: 1.1rem;
  margin-top: 1rem;
  color: gray;
`;

const Firedoor = ({ title }) => {
  return (
    <FiredoorBlock to={'/firedoor/' + title}>
      <Zoom>
        <img src={"/images/firedoor/" + title + ".jpg"} alt=""/>
      </Zoom>
      <TitleWrapper className="title">{title.replace("_", " ")}</TitleWrapper>
    </FiredoorBlock>
  );
};

export default Firedoor;
