import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { appRoutes } from './AppRoutes';
import NotFoundRoute from './components/NotFoundRoute/NotFoundRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={appRoutes.home} element={<Layout />}>
          <Route index element={<ItemListContainer />} />

          <Route path={appRoutes.category} element={<ItemListContainer />} />

          <Route
            path={appRoutes.itemDetail}
            element={<ItemDetailContainer />}
          />

          <Route path="*" element={<NotFoundRoute />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
