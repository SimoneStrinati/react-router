import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';

import HomePage from "./pages/Homepage";
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/Prodotti';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/prodotti' Component={Prodotti} />
          <Route path='/chisiamo' Component={ChiSiamo} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
