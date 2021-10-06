import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import MeetUp from './MeetUp';
import Library from './Library';
import Header from './Header';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path='/' exact component={Portfolio} />
        <Route path='/meetup' exact component={MeetUp} />
        <Route path='/library' exact component={Library} />
      </Router>
    </div>
  );
}

export default App;
