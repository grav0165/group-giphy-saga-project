import React from 'react';
import Favorites from '../Favorites/Favorites';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'

function App(props) {
  return (
    <Router>
      <div>
        <h1>Giphy Search!</h1>
        <Route path='/favorites'>
          <Favorites />
        </Route>
      </div>
    </Router>
  );
}

export default App;
