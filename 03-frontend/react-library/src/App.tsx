import React from 'react';
import './App.css';
import { NavBar } from './layout/NavBarAndFooter/NavBar';
import { Footer } from './layout/NavBarAndFooter/footer';
import { Homepage } from './layout/HomePage/Homepage';
import { SearchBookPage } from './layout/SearchBookPage/SearchBookPage';
import { Redirect, Route, Switch } from 'react-router-dom';


export const App =() => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home'></Redirect>
        </Route>
        <Route path='/home' exact>
          <Homepage />
        </Route>
        <Route path='/search'>
          <SearchBookPage />
        </Route>
      </Switch>
      
      
      <Footer/>
    </div>
    
  );
}


