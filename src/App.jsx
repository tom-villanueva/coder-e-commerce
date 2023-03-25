import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { appRoutes } from './AppRoutes';
import NotFoundRoute from './components/NotFoundRoute/NotFoundRoute';
import CartContextProvider from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';
import CheckoutContainer from './components/CheckoutContainer/CheckoutContainer';

function App() {
  return (
    <Router>
      <CartContextProvider>
        <Routes>
          <Route path={appRoutes.home} element={<Layout />}>
            <Route index element={<ItemListContainer />} />

            <Route path={appRoutes.category} element={<ItemListContainer />} />

            <Route
              path={appRoutes.itemDetail}
              element={<ItemDetailContainer />}
            />

            <Route path={appRoutes.cart} element={<CartContainer />} />

            <Route path={appRoutes.checkout} element={<CheckoutContainer />} />

            <Route path="*" element={<NotFoundRoute />} />
          </Route>
        </Routes>
      </CartContextProvider>
    </Router>
  );
}

export default App;
