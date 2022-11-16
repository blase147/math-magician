import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
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
        <Router>
          <Route exact path="/"><Home /></Route>
          <Route path="/calculator"><Calculator /></Route>
          <Route path="/quote"><Quote /></Route>
          <Route path="*"><NotMatch /></Route>
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
