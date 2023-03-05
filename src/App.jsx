import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { appRoutes } from './AppRoutes';

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

          <Route path="*" element={<h1>No encontrado!!!! 404</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
