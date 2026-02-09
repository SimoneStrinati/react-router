import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomePage from "./pages/Homepage";
import ChiSiamo from './pages/ChiSiamo';
import Prodotti from './pages/ProductList';
import DefaultLayout from './layouts/DefautlLayout';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={HomePage} />
            <Route path='/prodotti' Component={Prodotti} />
            <Route path='/chisiamo' Component={ChiSiamo} />
            <Route path="/prodotti/:id" Component={ProductDetailPage} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

//:id è un nome che ho dato io e deve essere uguale a quello di useParams

export default App
