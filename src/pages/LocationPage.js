import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import MapContainer from '../containers/map/MapContainer';
import FooterContainer from '../containers/common/FooterContainer';

const LocationPage = () => {
  return (
    <div>
      <HeaderContainer />
      <MapContainer />
      <FooterContainer />
    </div>
  );
};

export default LocationPage;