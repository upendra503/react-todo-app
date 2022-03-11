import React from 'react';

const Child = (props) => {
  return <button onClick={props.doFromParent}>{props.name}</button>;
};

export default Child;
