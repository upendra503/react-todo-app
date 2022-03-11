import React from 'react';

const OtherChild = (props) => {
  const childData = 'This data is from Child Component';
  return (
    <div>
      Data From Parent: {props.parentData}
      <br />
      <br />
      <button onClick={() => props.childToParent(childData)}>
        {props.name}
      </button>
    </div>
  );
};

export default OtherChild;
