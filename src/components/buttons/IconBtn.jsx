import React from 'react';

export default function (props) {
  const { Component, tooltip, handleClick } = props;

  return (
    <div title={null || tooltip}>
      <Component onClick={handleClick} />
    </div>
  );
}
