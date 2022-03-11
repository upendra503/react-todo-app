import React from 'react';


const User = (props) => {
  var age = props.age ? props.age : 'NA';
  if (props.children) {
    return (
      <div>
        Name: {props.children} | Age: {age}
      </div>
    );
  } else {
    return <div>Invalid data</div>;
  }
};

export default User;
