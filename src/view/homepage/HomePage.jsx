import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SetLayout, NotesList, NotesGrid } from '../../components/index';
import FabBtn from '../../components/buttons/FabBtn';
import { useBtnTheme } from '../../theme/useThemes/useThemes';
import { Footer } from '../../components/index';
import DefaultModal from '../../components/modal/DefaultModal';
import { useModalContext } from '../../context/ModalContext/ModalState';

const HomePage = () => {
  const classes = useBtnTheme();

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [layout, setLayout] = useState('grid'); // reset to table

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 700) setWindowSize(window.innerWidth);
    });
  }, []);

  return (
    <div>
      <SetLayout currentLayout={layout} changeLayout={setLayout} />
      <div>{layout === 'table' ? <NotesList /> : <NotesGrid />}</div>
      {windowSize > 500 ? (
        <div className={classes.fabPosition} title='Create a note'>
          <FabBtn to='create' component={Link} />
        </div>
      ) : (
        <Footer />
      )}
      <DefaultModal test='test' />
    </div>
  );
};

export default HomePage;
