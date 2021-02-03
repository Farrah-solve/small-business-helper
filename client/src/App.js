import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import {
   BrowserRouter as Router, 
   Route, 
   Switch, 
   Link, 
   Redirect 
  } from 'react-router-dom';

import MainPage from './pages';
import PageNotFound from './pages/404';
import BudgetsPage from './pages/budgets';

class App extends Component {
  render() {
    return (
    <Router>
      <div className='container'>
        
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='collapse nav-collapse'>
            <ul className='nav-bar mr-auto'>
              <li className='navbar-item'>
                <Link to='/' className='nav-link'>Small Business Helper</Link>
              </li>
            </ul>
          </div>
        </nav>

      </div>
      <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path ='/budgets' component={BudgetsPage} />
      {/* <Route path='/edit/:id' component={EditBudget} />
      <Route path='/create' component={CreateBudget} /> */}
      <Route exact path ='/404' component={PageNotFound} />
      <Redirect to='/404'/>
      </Switch>
    </Router>
  
    );
  }
}

export default App;
