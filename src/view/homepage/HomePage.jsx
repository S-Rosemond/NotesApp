import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SetLayout, NotesList, NotesGrid } from '../../components/index';
import FabBtn from '../../components/buttons/FabBtn';
import { useBtnTheme } from '../../theme/useThemes/useThemes';
import { Footer } from '../../components/index';
import DefaultModal from '../../components/modal/DefaultModal';
import { useLayoutContext } from './../../context/LayoutState/LayoutStateProvider';
import { Slide } from '@material-ui/core/';
import { useFormContext } from './../../context/FormContext/FormState';

const HomePage = () => {
  const classes = useBtnTheme();
  const { layout, setLayout } = useLayoutContext();
  const { notes } = useFormContext();

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const trigger = windowSize > 700;

  window.addEventListener('resize', () => {
    let timeout;

    if (timeout) {
      return clearTimeout(timeout);
    }

    timeout = setTimeout(() => setWindowSize(window.innerWidth), 2000);
  });

  return (
    <div>
      <div className='layout-container'>
        <SetLayout currentLayout={layout} changeLayout={setLayout} />

        {layout === 'table' ? (
          <NotesList />
        ) : (
          <div className='notes-container'>
            <NotesGrid />
          </div>
        )}
      </div>

      {trigger ? (
        <Slide direction='up' in={trigger}>
          <div className={classes.fabPosition} title='Create a note'>
            <FabBtn to='create' component={Link} />
          </div>
        </Slide>
      ) : (
        <Footer />
      )}
      <DefaultModal />
    </div>
  );
};

export default HomePage;

// notes.length >= 9 remove fab
