import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NotesList from '../../components/noteList/view/NotesList';
import FabBtn from '../../components/buttons/FabBtn';
import { useBtnTheme } from '../../theme/useThemes/useThemes';
import { Footer } from '../../components/index';

const HomePage = () => {
  const classes = useBtnTheme();

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 700) setWindowSize(window.innerWidth);
    });
  }, []);

  return (
    <div>
      <div>
        <NotesList />
      </div>
      {windowSize > 500 ? (
        <div className={classes.fabPosition} title='Create a note'>
          <FabBtn to='create' component={Link} />
        </div>
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default HomePage;
