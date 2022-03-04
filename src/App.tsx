import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import data from './components/back/Data';
import ImageSlider from './components/ImageSlider';
function App() {
  const {productItems} = data
  return (
    <>
      <NavBar/>
      <ImageSlider/>
    </>
      
      
  );
}

export default App;
