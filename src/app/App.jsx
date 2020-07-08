import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import mainTheme from '../theme/main.theme';
import SearchAppBar from '../components/navigation/SearchAppBar';
import FormState from '../context/Form.state.jsx';
import { CreateNotePage, HomePage } from '../view/index';

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
            </Switch>
          </Router>
        </FormState>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
