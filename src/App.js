import React from 'react';

import { connect } from 'react-redux';
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
  // incrementAge = () => {
  //   let newAge = this.state.age + 1;
  //   this.setState({
  //     age: newAge,
  //   });
  // };
  // decrementAge = () => {
  //   let newAge = this.state.age - 1;
  //   this.setState({
  //     age: newAge,
  //   });
  // };
  render() {
    return (
      <div>
        <h1>
          <LoadHeaderName />
        </h1>
        <Users title="List of Users">Test</Users>
        {/* Below commented code - grand parent, Parent child communication 
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
        */}
        <div>Redux buttons State Data--Age: {this.props.age}</div>
        <button onClick={this.props.incrementAge}>Age Up</button>
        <br />
        <br />
        <button onClick={this.props.decrementAge}>Age Down</button>
      </div>
    );
  }
}
function LoadHeaderName() {
  return <div>Hello Users App</div>;
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispatchToProps = (dispach) => {
  return {
    incrementAge: () => dispach({ type: 'ADD' }),
    decrementAge: () => dispach({ type: 'SUB' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
