import React from 'react';

import Child from './Child';
const Parent = (props) => {
  return (
    <div>
      <h4>Parent - Child Example </h4>
      <Child doFromParent={props.doFirstFromParent} name={props.name} />
      <br />
      <br />
      <Child doFromParent={props.doSecondFromParent} name={props.name} />
    </div>
  );
};

export default Parent;
