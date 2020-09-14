import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { FabBtn } from '../index';
import { useBtnTheme } from '../../theme/useThemes/useThemes';

const AppFooter = () => {
  const classes = useBtnTheme();
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 700) setWindowSize(window.innerWidth);
    });
  }, []);

  return (
    <Fragment>
      {windowSize > 500 ? (
        <div className={classes.fabPosition} title='Create a note'>
          <FabBtn to='create' component={Link} />
        </div>
      ) : (
        <Footer />
      )}
    </Fragment>
  );
};

export default AppFooter;
