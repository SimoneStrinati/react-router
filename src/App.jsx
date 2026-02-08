import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomePage from "./pages/Homepage";
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/Prodotti';
import DefaultLayout from './layouts/DefautlLayout';

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
