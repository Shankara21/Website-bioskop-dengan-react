import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Superhero from './components/Superhero';
import Footer from './components/Footer';

import './assets/css/style.css'

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>
      {/* End of Intro */}

      {/* Trending Section */}
      <div className='trending'>
          <Trending />
      </div>
      {/* End of Trending */}

      {/* Superhero Section */}
      <div className='superhero'>
        <Superhero />
      </div>
      {/* End of Superhero */}
    </div>
  );
}

export default App;
