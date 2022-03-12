import React from 'react';
import './user-styles.css';

const User = (props) => {
  var age = props.age ? props.age : 'NA';
  if (props.children) {
    return (
      <div className="user-row">
        <span>
          Name: {props.children} | Age: {age}
        </span>
        <span className="delete-user-button">
          <button onClick={props.deleteUser}> Delete</button>
        </span>
      </div>
    );
  } else {
    return <div>Invalid data</div>;
  }
};

export default User;
