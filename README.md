# react-zsemul

Previous Repo URL:
github.com/upendraPDF365/react-practice

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-zsemul)

# react-bp6k58

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-bp6k58)

<!-- JSX: -->

It allows you to HTML looking syntax that transformed into lightweight javascript Objects

check babeljs.io for more info

you can't use class attribute, use className

- use Pascal case for Component Names

## i.e MyFirstComponent

<!-- Class Components vs Functional Component -->

- we need to import React, Component in class Component
- We need to import React in Functional comp;

- need to have render method
- No need to have render method

- we can use an du[date the state info
- state can't be used inside functional Component

- props need not to be passed , access using this.props
- Need to pass props as param to the function.

- Both, Need to export Componentto use in other places.

Functional

- use props.children to access unnamed props.
  Ex: <User>Upendra</User>
  props.children will show Upendra inside of the functional Component

<!-- --- -->

Props Vs state

setState:

- when setting state vartual dom comes into picture it will chekc for what part of the dom needs to change and it will update.

- setState is asynchronous, if you console state updated will not reflect immediately but dom will be updated after few seconds state data will be upadted
<!--  -->

<!-- ---------------------- -->

Two way data binding

Below function calls on onclick on the button

- onclick={this.functionName}

Below function calls on page load, so avoid using brackets
-onclick={this.functionName()}

to send params, use bind function to this from call, apply, bind
it gives better performance

- onclick={this.funcionName.bind(this,'param value')}

for two way binding

use input

<input type="text" onChange={this.funcionName} value={this.state.inputValue}>

to receive the value in funcionName use event

functionName = (e) =>{
use e.target.value;
}

<!-- Two Way Binding End -->

<!-- Controlled and un controlled Components -->

<!-- Controlled  -->
A component, which takes its current value from props and notifies changes through callback function like onChange. A parent component controls it by handling callback and mainatian their own state and passing its values through props.
<input type="text" value={value} onChange={handleChange} />


<!-- Un Controlled  -->
A component which stores it state internally and we access teh component using ref.
<input type="text" defaultValue="foo" ref={inputRef} />

<!-- Pure Components  -->

If we extend a component with React.PureComponent,
Then there is no need of shouldComponentUpdate() method, because pure component compares current prop and state valuea and new props and state values whther both are same or not. if same it won't re-render the component.

<!-- 
import React from ‘react’;
  
export default class Test extends React.PureComponent{
   render(){
      return <h1>Welcome to GeeksforGeeks</h1>;
   }
} 
-->
