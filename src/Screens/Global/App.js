import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio.js';
import News from '../../components/News';
import Library from '../../components/Library';
import Header from './Header/Header.js';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path='/' exact component={Portfolio} />
        <Route path='/news' exact component={News} />
        <Route path='/library' exact component={Library} />
      </Router>
    </div>
  );
}

export default App;
