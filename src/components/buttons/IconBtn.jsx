import React from 'react';
import { useHistory } from 'react-router-dom';

export default function (props) {
  const { Component, to } = props;
  const history = useHistory();

  const goBack = (to, event) => {
    event.preventDefault();
    history.push(to);
  };

  return <Component onClick={goBack.bind(null, to)} />;
}
