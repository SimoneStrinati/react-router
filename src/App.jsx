import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from "./pages/Homepage";
import ChiSiamo from './pages/ChiSiamo';

function App() {
  // const [count, setCount] = useState(0)

  const apiUrl = 'https://fakestoreapi.com/products';

  axios.get(apiUrl)
    .then(response => console.log(response.data));

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/chisiamo' Component={ChiSiamo} />
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
