import './App.css';
import SWCharacters from './js/components/SWCharacters';
import { getWindowHost } from "./js/utils/urlUtils";

function App() {
  return (
    <div className="App">
      <header className="header">
          <img src={`${getWindowHost()}/img/star.svg`} alt="Star" className="header-img"/>
          <img src={`${getWindowHost()}/img/wars.svg`} alt="Wars" className="header-img"/>
      </header>
      <SWCharacters/>
    </div>
  );
}

export default App;
