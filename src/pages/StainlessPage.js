import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import StainlessContainer from '../containers/stainless/StainlessContainer';
import FooterContainer from '../containers/common/FooterContainer';

const IndexPage = () => {
  return (
    <div>
      <HeaderContainer />
      <StainlessContainer />
      <FooterContainer />
    </div>
  );
};

export default IndexPage;