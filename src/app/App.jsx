import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import mainTheme from '../theme/main.theme';
import SearchAppBar from '../components/navigation/SearchAppBar.jsx';
import FormState from '../context/Form.state.jsx';
import { CreateNotePage, HomePage } from '../view/index';
import Notes from '../components/notes/Notes';

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
              <Route path='/:id' exact component={Notes} />
            </Switch>
          </Router>
        </FormState>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
