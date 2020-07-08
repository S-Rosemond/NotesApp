import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import mainTheme from './../theme/main.theme';
// import CreateNotePage from './../components/notes/CreateNotePage';
import SearchAppBar from './../components/navigation/SearchAppBar';
import FormState from '../context/Form.state';
import DocEditor from './../components/ckeditor/DocEditor';
import temp from '../components/view/Temp';

const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={mainTheme}>
        <FormState>
          <Router>
            <SearchAppBar />
            <Switch>
              <Route to='/' exact component={temp} />
            </Switch>
          </Router>
        </FormState>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
