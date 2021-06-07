import React from 'react';
import './css/App.css';
import Home from './Components/Pages/Home';
import Achievement from './Components/Pages/Achievement';
import Navbar from './Components/Navbar'
import Contact from './Components/Pages/Contact'
import Sepacademy from './Components/Pages/Sep-academy';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
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
  );
}

export default App;
