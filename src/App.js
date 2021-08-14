import React from 'react';
import { Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LocationPage from './pages/LocationPage';
import FiredoorPage from './pages/FiredoorPage';
import StainlessPage from './pages/StainlessPage';
import SashPage from './pages/SashPage';
import LexanPage from './pages/LexanPage';

const App = () => {
  return (
    <Route>
      <Route path='/' component={IndexPage} exact />
      <Route path='/location' component={LocationPage} />
      <Route path='/firedoor' component={FiredoorPage} />
      <Route path='/stainless/:kind' component={StainlessPage} />
      <Route path='/sash/:kind' component={SashPage} />
      <Route path='/lexan' component={LexanPage} />
    </Route>
  );
};

export default App;
