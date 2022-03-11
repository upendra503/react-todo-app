import React from 'react';
import Users from './users/Users';
import Parent from './parentChild/Parent';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonTitle: 'Inital Title',
    };
  }
  callignFirstChild = (title) => {
    this.setState({
      buttonTitle: title,
    });
  }; 
  callignSecondChild = (title) => {
    this.setState({
      buttonTitle: title,
    });
  };
  render() {
    return (
      <div>
        <h1>
          <LoadHeaderName />
        </h1>
        <Users title="List of Users">Test</Users>
        <Parent
          doFirstFromParent={this.callignFirstChild.bind(
            this,
            'New Title from APP'
          )}
          doSecondFromParent={this.callignSecondChild.bind(
            this,
            'Second Title'
          )}
          name={this.state.buttonTitle}
        />
      </div>
    );
  }
}
function LoadHeaderName() {
  return <div>Hello Users App</div>;
}
export default App;
