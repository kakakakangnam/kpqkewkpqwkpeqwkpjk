import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FiredoorList from '../../components/firedoor/FiredoorList';
// import FiredoorDescription from '../../components/firedoor/FiredoorDescription';
// import FiredoorIndex from '../../components/firedoor/FiredoorIndex';

const FiredoorContainer = () => {
  return (
    <Switch>
      <Route path='/firedoor' exact component={FiredoorList} />
      {/* <Route path='/firedoor/index' exact component={FiredoorIndex} /> */}
      {/* <Route path='/firedoor/:title' component={FiredoorDescription} /> */}
    </Switch>
  );
};

export default FiredoorContainer;