import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import Router from './Router';

const Navigation = (props) => <nav>
  <ul>
    <li><NavLink to='/'>home</NavLink></li>
    <li><NavLink to='/cart'>cart</NavLink></li>
  </ul>
</nav> 

class App extends Component {
  render() {
    return <div>
      <Navigation />

      <Router />
    </div>
  }
}

export default App;
