import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SetLayout, NotesList } from '../../components/index';
import FabBtn from '../../components/buttons/FabBtn';
import { useBtnTheme } from '../../theme/useThemes/useThemes';
import { Footer } from '../../components/index';
import DefaultModal from '../../components/modal/DefaultModal';
import { useModalContext } from '../../context/ModalContext/ModalState';

const HomePage = () => {
  const classes = useBtnTheme();

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [layout, setLayout] = useState('table');

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 700) setWindowSize(window.innerWidth);
    });
  }, []);

  return (
    <div>
      <SetLayout changeLayout={setLayout} />
      <div>{layout === 'table' ? <NotesList /> : 'temp for grid'}</div>
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
