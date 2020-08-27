import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Users from './pages/Users';
import Products from './pages/Products';
import Config from './pages/Config';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/"exact component={Home}/>
          <Route path="/users" component={Users}/>
          <Route path="/products" component={Products}/>
          <Route path="/config" component={Config}/>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
