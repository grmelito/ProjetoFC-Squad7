import React from 'react';
// import Header from './componebts/Header';
import './style.css'
import logo from '../../assets/logoBfriend.png';

export default function Home(){
    return(
    // <Header/>
  <div className="HomeContainer">

      <img src={logo} alt="Logo Bfriend"/>
  </div>

    );
}