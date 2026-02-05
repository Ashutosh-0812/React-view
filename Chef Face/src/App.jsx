import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Ingredients from './components/Ingredients';

function App() {


  return (
    <>
   <Header/>
   <Ingredients />
    </>
  );
}

export default App
