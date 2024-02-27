import './App.css';

import NavbarSetupApp from './components/NavbarSetupApp';
import ControlledCarousel from './components/ControlledCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <NavbarSetupApp/>
        <ControlledCarousel/>
    </div>
  );
}

export default App;