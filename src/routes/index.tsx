import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/Signin';
import SignUn from '../pages/SingUp';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUn} />

    <Route path="/dashboard" exact component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
