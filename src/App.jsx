import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefautlLayout';

import HomePage from "./pages/Homepage";
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/Prodotti';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={HomePage} />
            <Route path='/prodotti' Component={Prodotti} />
            <Route path='/chisiamo' Component={ChiSiamo} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
