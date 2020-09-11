import React from 'react';
import { Apps, Toc } from '@material-ui/icons';
import { useBtnTheme } from '../../theme/useThemes/useThemes';

import IconBtn from './IconBtn';

const LayoutBtn = ({ changeLayout }) => {
  const classes = useBtnTheme();
  const iconStyles = { fontSize: '2rem', width: '1.5em', cursor: 'pointer' };

  const changeLayoutGrid = () => changeLayout('grid');
  const changeLayoutTable = () => changeLayout('table');

  return (
    <div className={classes.flexChangeLayout}>
      <div className={classes.spaceLayoutBtn}>
        <IconBtn
          tooltip='grid'
          Component={Apps}
          styles={iconStyles}
          handleClick={changeLayoutGrid}
        />

        <IconBtn
          styles={iconStyles}
          tooltip='table'
          handleClick={changeLayoutTable}
          Component={Toc}
        />
      </div>
    </div>
  );
};

export default LayoutBtn;
