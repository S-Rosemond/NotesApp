import React from 'react';

export default function (props) {
  const { Component, tooltip, handleClick, styles, iconClass } = props;

  return (
    <div title={null || tooltip}>
      <Component
        className={iconClass}
        style={styles || null}
        onClick={handleClick}
      />
    </div>
  );
}
