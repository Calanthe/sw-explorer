import './App.css';
import SWCharacters from './js/components/SWCharacters';

const url = window.location.protocol + "//" + window.location.host;

function App() {
  return (
    <div className="App">
      <header className="header">
          <img src={`${url}/img/star.svg`} alt="Star" className="header-img"/>
          <img src={`${url}/img/wars.svg`} alt="Wars" className="header-img"/>
      </header>
      <SWCharacters/>
    </div>
  );
}

export default App;
