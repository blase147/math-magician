import React from 'react';
import { BrowserRouter as Route, } from 'react-router-dom';
import './pages/App.css';
import Calculator from './components/calculator';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';
import NotMatch from './pages/NotMatch';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
