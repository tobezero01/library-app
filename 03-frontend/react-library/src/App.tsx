import React from 'react';
import './App.css';
import { NavBar } from './layout/NavBarAndFooter/NavBar';
import { Footer } from './layout/NavBarAndFooter/footer';
import { Homepage } from './layout/HomePage/Homepage';
import { SearchBookPage } from './layout/SearchBookPage/SearchBookPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BookCheckOutPage } from './layout/BookCheckOutPage/BookCheckOutPage';


export const App =() => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <NavBar />
      <div className='flex-grow-1'>
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

          <Route path='/checkout/:bookId'>
            <BookCheckOutPage />
          </Route>
        </Switch>
      </div>

      <Footer/>
    </div>
    
  );
}


