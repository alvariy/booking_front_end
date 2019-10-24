import React from 'react';
import logo from './logo.svg';
import './App.css';
import PickUpInput from './components/PickUpInput'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PackageWarehouseInput from './components/PackageWarehouseInput';

function App() {
  return (
    <div className="App">
        <Router>
        <div>
            <Link to="/setPickUpDate">Set Pick Up Date</Link>
            <span>/</span>
            <Link to="/homePage">Home</Link>
            </div>

            <Switch>
          <Route exact path="/setPickUpDate">
          <PickUpInput/>
          </Route>
          <Route path="/homePage">
          <PackageWarehouseInput/>
          </Route>
        </Switch>

        </Router>
    </div>
  );
}
function Home() {
  return (
    <div >
      <h1> Home</h1>
    </div>
  );
}

export default App;
