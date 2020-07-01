import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import CreateNotePage from './../components/notes/CreateNotePage';
import FormState from '../context/Form.state';
import DocEditor from './../components/ckeditor/DocEditor';
import temp from '../components/view/Temp';

const App = () => {
  return (
    <Fragment>
      <FormState>
        <Router>
          <Switch>
            <Route to='/' exact component={temp} />
          </Switch>
        </Router>
      </FormState>
    </Fragment>
  );
};

export default App;
