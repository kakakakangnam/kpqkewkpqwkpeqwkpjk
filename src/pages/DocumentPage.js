import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import DocumentContainer from '../containers/document/DocumentContainer';
import FooterContainer from '../containers/common/FooterContainer';

const IndexPage = () => {
  return (
    <div>
      <HeaderContainer />
      <DocumentContainer />
      <FooterContainer />
    </div>
  );
};

export default IndexPage;