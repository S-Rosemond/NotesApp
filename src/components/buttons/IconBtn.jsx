import React from 'react';

export default function (props) {
  const { Component, tooltip, handleClick, styles } = props;

  return (
    <div title={null || tooltip}>
      <Component style={styles || null} onClick={handleClick} />
    </div>
  );
}
