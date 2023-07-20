import React from 'react';
import Favorites from '../Favorites/Favorites';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Search from '../Search/Search';
import Header from '../Header/Header';

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
