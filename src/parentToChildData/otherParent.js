import React, { useState } from 'react';

import OtherChild from './otherChild';

const OtherParent = () => {
  const [data, setData] = useState('init data');
  const [data1, setChildData] = useState('initial child data');
  const parentToChild = () => {
    setData('data to set from parent');
  };
  const childToParent = (childData) => {
    setChildData(childData);
  };
  return (
    <div>
      Parent Data: {data}
      <br />
      <br />
      Child Data: {data1}
      <br />
      <br />
      <OtherChild
        parentData={data}
        childToParent={childToParent}
        name="child button"
      />
      <button onClick={parentToChild}>Parent Button</button>
    </div>
  );
};

export default OtherParent;
