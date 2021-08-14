import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StainlessAccessory from '../../components/stainless/StainlessAccessory';

const FiredoorContainer = () => {
  return (
    // <Switch>
    //   <Route path='/stainless/watergutter' exact component={WaterGutter} />
    // </Switch>
    <StainlessAccessory />
  );
};

export default FiredoorContainer;