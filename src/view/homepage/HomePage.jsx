import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SetLayout, NotesList, NotesGrid } from '../../components/index';
import FabBtn from '../../components/buttons/FabBtn';
import { useBtnTheme } from '../../theme/useThemes/useThemes';
import { Footer } from '../../components/index';
import DefaultModal from '../../components/modal/DefaultModal';
import { useModalContext } from '../../context/ModalContext/ModalState';
import { useLayoutContext } from './../../context/LayoutState/LayoutStateProvider';

const HomePage = () => {
  const classes = useBtnTheme();
  const { layout, setLayout } = useLayoutContext();

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 700) setWindowSize(window.innerWidth);
    });
  }, []);
  console.log(layout);
  return (
    <div>
      <div style={{ marginBottom: '100px' }}>
        <SetLayout currentLayout={layout} changeLayout={setLayout} />
        <div>{layout === 'table' ? <NotesList /> : <NotesGrid />}</div>
      </div>

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
