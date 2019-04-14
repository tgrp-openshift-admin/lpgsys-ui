import React from 'react'
import { Route, Switch } from 'react-router'
import Dashboard from '../components/dashboard';
import Login from '../components/login'


const routes = (
  <div style={{ height: '100%' }}>
    <Switch>
      <Route exact={true} path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </div>
)

export default routes
