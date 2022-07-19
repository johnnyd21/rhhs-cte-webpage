import React from 'react';
import './css/App.css';
import Home from './Components/Pages/Home';
import Achievement from './Components/Pages/Achievement';
import Contact from './Components/Pages/Contact'
import Sepacademy from './Components/Pages/Sep-academy';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';


// This is an App function which...
function App() {
// Returns the HTML contained herein.
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/sep-academy' component={Sepacademy} />
        <Route path='/student-achievement' component={Achievement} />
        <Route path='/contact-us' component={Contact} />
      </Switch>
    </Router>
// Each of those elements which aren't really HTML are actually components of their own, 
// which will also return their own HTML.
  );
}

export default App;
