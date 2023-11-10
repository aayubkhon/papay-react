import React from 'react';
import './css/App.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import Dishes from './components/dishes';
import Users from './components/user';
function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dishes">Dishes</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/dishes">
          <Dishes />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;


function Home() {
  return (
    <div >
      <h1>Home</h1>
    </div>
  );
}