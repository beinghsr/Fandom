import React from 'react';
import Header from './components/header';
import Sidebar from '../src/components/sidebar';
import Homepage from './components/homepage';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Homepage/>
      test from app
    </div>
  );
}

export default App;
