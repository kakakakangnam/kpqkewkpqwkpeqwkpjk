import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import LexanContainer from '../containers/lexan/LexanContainer';
import FooterContainer from '../containers/common/FooterContainer';

const IndexPage = () => {
  return (
    <div>
      <HeaderContainer />
      <LexanContainer />
      <FooterContainer />
    </div>
  );
};

export default IndexPage;