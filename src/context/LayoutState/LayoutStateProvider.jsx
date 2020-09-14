import React, { useState, useContext } from 'react';
import LayoutContext from './LayoutContext';

const LayoutStateProvider = (props) => {
  const [layout, setLayout] = useState(() => 'grid'); // reset to table

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {props.children}
    </LayoutContext.Provider>
  );
};

export function useLayoutContext() {
  return useContext(LayoutContext);
}

export default LayoutStateProvider;
