import React from 'react';
import './App.css';
import { NavBar } from './layout/NavBarAndFooter/NavBar';
import { Footer } from './layout/NavBarAndFooter/footer';
import { Homepage } from './layout/HomePage/Homepage';
import { SearchBookPage } from './layout/SearchBookPage/SearchBookPage';


export const App =() => {
  return (
    <div>
      <NavBar />
      {/* <Homepage/> */}
      <SearchBookPage/>
      <Footer/>
    </div>
    
  );
}


