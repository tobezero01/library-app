import React from 'react';
import './App.css';
import { NavBar } from './layout/NavBarAndFooter/NavBar';
import { Footer } from './layout/NavBarAndFooter/footer';
import { Homepage } from './layout/HomePage/Homepage';


export const App =() => {
  return (
    <div>
      <NavBar />
      <Homepage/>
      <Footer/>
    </div>
    
  );
}


