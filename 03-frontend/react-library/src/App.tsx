import React from 'react';
import './App.css';
import { NavBar } from './layout/NavBarAndFooter/NavBar';
import { Footer } from './layout/NavBarAndFooter/footer';
import { Homepage } from './layout/HomePage/Homepage';
import { SearchBookPage } from './layout/SearchBookPage/SearchBookPage';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { oktaConfig } from './lib/oktaConfig';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security } from '@okta/okta-react';
import LoginWidget from './Auth/LoginWidget';
import { ReviewListPage } from './layout/BookCheckOutPage/ReviewListPage/ReviewListPage';
import { BookCheckoutPage } from './layout/BookCheckOutPage/BookCheckOutPage';

const oktaAuth = new OktaAuth(oktaConfig);

export const App =() => {

  const customAuthHandler = () => {
    history.push('/login');
  }

  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
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
            <Route path='/reviewlist/:bookId'>
              <ReviewListPage/>
            </Route>

            <Route path='/checkout/:bookId'>
              <BookCheckoutPage />
            </Route>

            <Route path='/login' render={
            () => <LoginWidget config={oktaConfig} /> 
            } 
          />
          <Route path='/login/callback' component={LoginCallback} />
          </Switch>
        </div>

        <Footer/>
      </Security>
      
    </div>
    
  );
}


