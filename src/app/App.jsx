import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import FormState from '../context/Form.state.jsx';
import mainTheme from '../theme/main.theme';

import { Notes, SearchAppBar } from '../components/index';
import { CreateNotePage, HomePage } from '../view/index';
import EditPage from './../view/editpage/EditPage';

const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={mainTheme}>
        <FormState>
          <Router>
            <SearchAppBar />
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/create' exact component={CreateNotePage} />
              <Route path='/edit' exact component={EditPage} />
              <Route path='/:id' exact component={Notes} />
            </Switch>
          </Router>
        </FormState>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
