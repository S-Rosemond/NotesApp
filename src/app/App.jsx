import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import mainTheme from '../theme/main.theme';

import FormState from '../context/FormContext/FormState';
import ModalStateProvider from '../context/ModalContext/ModalState.jsx';
import { Notes, SearchAppBar } from '../components/index';
import { CreateNotePage, HomePage } from '../view/index';
import EditPage from './../view/editpage/EditPage';
import NotesGrid from './../components/notesGrid/view/NotesGrid';

const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={mainTheme}>
        <FormState>
          <ModalStateProvider>
            <Router>
              <SearchAppBar />
              <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/create' exact component={CreateNotePage} />
                <Route path='/card' exact component={NotesGrid} />
                <Route path='/edit' exact component={EditPage} />
                <Route path='/:id' exact component={Notes} />
              </Switch>
            </Router>
          </ModalStateProvider>
        </FormState>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
