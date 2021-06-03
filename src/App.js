import './App.css';
import Characters from './js/components/Characters';
import Movies from './js/components/Movies';
import { getWindowHost } from "./js/utils/urlUtils";
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
          <ul>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/characters">
            <Characters/>
          </Route>
          <Route path="/movies">
            <Movies/>
          </Route>
          <Route 
            exact
            path="/"
            render={() => <Redirect to="/characters" />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
