import React from 'react';
import { Apps, Toc } from '@material-ui/icons';
import { useBtnTheme } from '../../theme/useThemes/useThemes';

const LayoutBtn = ({ changeLayout }) => {
  const classes = useBtnTheme();
  const iconStyles = { fontSize: '2rem', width: '1.5em', cursor: 'pointer' };

  const changeLayoutGrid = () => changeLayout('grid');
  const changeLayoutTable = () => changeLayout('table');

  return (
    <div className={classes.flexChangeLayout}>
      <div className={classes.spaceLayoutBtn}>
        <Apps style={iconStyles} onClick={changeLayoutGrid} />
        <Toc style={iconStyles} onClick={changeLayoutTable} />
      </div>
    </div>
  );
};

export default LayoutBtn;
