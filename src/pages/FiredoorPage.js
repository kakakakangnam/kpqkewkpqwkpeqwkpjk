import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import FiredoorContainer from '../containers/firedoor/FiredoorContainer';
import FooterContainer from '../containers/common/FooterContainer';

const IndexPage = () => {
  return (
    <div>
      <HeaderContainer />
      <FiredoorContainer />
      <FooterContainer />
    </div>
  );
};

export default IndexPage;