import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import data from './components/back/Data';
function App() {
  const {productItems} = data
  return (
      <NavBar/>
  );
}

export default App;
