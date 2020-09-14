import React from 'react';
import { ViewList, ViewModule } from '@material-ui/icons';
import { useBtnTheme } from '../../theme/useThemes/useThemes';

import IconBtn from './IconBtn';
// could refactor with map and use index to set active
// instead of repeating activeStyles, keeping as is;
const LayoutBtn = ({ changeLayout, currentLayout }) => {
  const classes = useBtnTheme();
  const tableActiveStyles = {
    color: `${currentLayout === 'table' ? 'var(--secondary)' : 'initial'}`,
  };
  const gridActiveStyles = {
    color: `${currentLayout === 'grid' ? 'var(--secondary)' : 'initial'}`,
  };

  const changeLayoutGrid = () => changeLayout('grid');
  const changeLayoutTable = () => changeLayout('table');

  return (
    <div className={classes.flexChangeLayout}>
      <div className={classes.spaceLayoutBtn}>
        <IconBtn
          tooltip='grid'
          Component={ViewModule}
          styles={gridActiveStyles}
          handleClick={changeLayoutGrid}
          iconClass={classes.iconClass}
        />

        <IconBtn
          styles={tableActiveStyles}
          tooltip='table'
          handleClick={changeLayoutTable}
          Component={ViewList}
          iconClass={classes.iconClass}
        />
      </div>
    </div>
  );
};

export default LayoutBtn;
