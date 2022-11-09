/* eslint-disable */
import React from 'react';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './Quotes';

class App extends React.PureComponent {
  render() {
    return (
      <div>
      <Home />
      <Calculator />
      <Quote />
      </div>
    );
  }
}
export default App;
