import React from 'react';
import './App.css'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'

// Importing in components
import Header from '../Header/Header';
import Favorites from '../Favorites/Favorites';
import Search from '../Search/Search';

function App(props) {

  return (
    
    <Router>
      <div>
      <Header/>
        <Route path='/favorites' exact>
          <Favorites />
        </Route>
        <Search />
      </div>
    </Router>
  );
}

export default App;
