import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import App from './AppRoute';

class Useless extends React.Component {
  render() {
    return <div>I'm useless</div>;
  }
}

export default (
  <Route name='main' path='/'>
    <DefaultRoute name='counter' handler={App} />
    <Route name='useless' handler={Useless} path='useless' />
  </Route>
);
