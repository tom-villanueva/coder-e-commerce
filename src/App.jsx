import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import navbarItems from './NavbarItems';

function App() {
  return (
    <div>
      <Navbar items={navbarItems} />
      <ItemListContainer greeting="Start youy epic journey here" />
    </div>
  );
}

export default App;
