import React from 'react';

import Child from './Child';
const Parent = (props) => {
  return (
    <div>
      <Child  doFromParent={props.doFirstFromParent} name={props.name}/>
      <Child doFromParent={props.doSecondFromParent} name={props.name}/>
    </div>
  );
};

export default Parent;
