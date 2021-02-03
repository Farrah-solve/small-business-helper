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
