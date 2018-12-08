import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ChartA from './ChartA';
import ChartB from './ChartB';

const redirectSlash = props => <Redirect to={`${props.location.pathname}`} />;

const App = () => (
  <Router>
    <Switch>
      <Route exact strict path="/:url*" render={redirectSlash}/>} />
      <Route path="/" component={Home} exact={true} />
      <Route path="/charta/" component={ChartA} exact={true} />
      <Route path="/chartb/" component={ChartB} exact={true} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
