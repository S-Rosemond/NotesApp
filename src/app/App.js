import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../components/home/HomePage';
import FormState from '../context/Form.state';

const App = () => {
  return (
    <Fragment>
      <FormState>
        <Router>
          <Switch>
            <Route to='/' exact component={HomePage} />
          </Switch>
        </Router>
      </FormState>
    </Fragment>
  );
};

export default App;
