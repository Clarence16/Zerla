import React from 'react';
// import './App.css';
import NavBar from './components/NavBar';
import data from './components/back/Data';
// import styled from 'styled-components'
import { Router } from 'react-router-dom';
function App() {
  const {productItems} = data
  return (
    <>
      <NavBar/>
    </>
  );
}

export default App;
