import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarSetupApp from './components/NavbarSetupApp';
import ControlledCarousel from './components/ControlledCarousel';
import Solutions from './components/Solutions';
import Products from './components/Products';
import FooterSetupApp from './components/FooterSetupApp';

function App() {
  return (
    <div className="App">
        <NavbarSetupApp/>
        <ControlledCarousel/>
        <Solutions/>
        <Products/>
        <FooterSetupApp/>
    </div>
  );
}

export default App;