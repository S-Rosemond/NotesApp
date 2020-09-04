import React from 'react';
import { useHistory } from 'react-router-dom';

export default function (props) {
  const { Component, to, tooltip } = props;
  const history = useHistory();

  const goBack = (to, event) => {
    event.preventDefault();
    history.push(to);
  };

  return (
    <div title={null || tooltip}>
      <Component onClick={goBack.bind(null, to)} />
    </div>
  );
}
