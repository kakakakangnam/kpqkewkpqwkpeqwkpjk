import React from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.img`
  max-width: 100%;
`;

const Banner = () => {
  return (
      <BannerWrapper src="/images/index/sub_visual.jpg"/>
  );
};

export default Banner;