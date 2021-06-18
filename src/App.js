import './App.css';
import SwExplorer from './js/components/SwExplorer.tsx';
import { getWindowHost } from "./js/utils/utils";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <header className="header">
            <img src={`${getWindowHost()}/img/star.svg`} alt="Star" className="header-img"/>
            <img src={`${getWindowHost()}/img/wars.svg`} alt="Wars" className="header-img"/>
          </header>
          <ul className="menu">
            <li className="menu-item">
              <Link to="/characters" className="menu-link">Characters</Link>
            </li>
            <li className="menu-item">
              <Link to="/movies" className="menu-link">Movies</Link>
            </li>
            <li className="menu-item">
              <Link to="/starships" className="menu-link">Starships</Link>
            </li>
            <li className="menu-item">
              <Link to="/planets" className="menu-link">Planets</Link>
            </li>
            <li className="menu-item">
              <Link to="/vehicles" className="menu-link">Vehicles</Link>
            </li>
            <li className="menu-item">
              <Link to="/species" className="menu-link">Species</Link>
            </li>
          </ul>
        </nav>
        {/* Taken from https://github.com/tholman/github-corners */}
        <a href="https://github.com/Calanthe/sw-explorer" className="github-corner" aria-label="View source on GitHub">
            <svg width="80" height="80" viewBox="0 0 250 250" style={{fill: '#000000', color: '#FDF253', position: 'absolute', top: 0, border: 0, right: 0}} aria-hidden="true">
                <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" className="octo-arm octo-transform"></path>
                <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path>
            </svg>
        </a>
        <Switch>
          <Route path="/characters">
            <SwExplorer dataType="characters"/>
          </Route>
          <Route path="/movies">
            <SwExplorer dataType="movies"/>
          </Route>
          <Route path="/starships">
            <SwExplorer dataType="starships"/>
          </Route>
          <Route path="/planets">
            <SwExplorer dataType="planets"/>
          </Route>
          <Route path="/vehicles">
            <SwExplorer dataType="vehicles"/>
          </Route>
          <Route path="/species">
            <SwExplorer dataType="species"/>
          </Route>
          <Route 
            exact
            path="/"
            render={() => <Redirect to="/characters" />}
          />
        </Switch>

        <footer className="footer">
            <p>Made by <a href="https://zofiakorcz.pl" className="footer-link">Zofia Korcz</a> using <a href="https://swapi.dev/" className="footer-link">The Star Wars API</a>.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
