import Home from './pages/Home/Home';
import backgroundImg from './assets/img_fond.webp';

import './App.css';
import ModalAboutMe from './components/Modal/ModalAboutMe';
import ModalSkills from './components/Modal/ModalSkills';

function App() {
  return (
    <div className="App">
      <img className='backgroungImg' src={backgroundImg} alt='lignes de code'></img>
      <Home />
    </div>
  );
}

export default App;
