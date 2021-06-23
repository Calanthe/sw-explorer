import {
    Link,
    useLocation
  } from "react-router-dom";

export default function Menu() {
    const location = useLocation();

    const isCurrentLocation = (pattern: string) => {
        return location.pathname === pattern;
    }

    return (
        <div>
            <ul className="menu">
                <li className="menu-item">
                    <Link to="/characters" className={isCurrentLocation('/characters') ? "menu__link menu__link--active" : "menu__link"}>Characters</Link>
                </li>
                <li className="menu-item">
                    <Link to="/movies" className={isCurrentLocation('/movies') ? "menu__link menu__link--active" : "menu__link"}>Movies</Link>
                </li>
                <li className="menu-item">
                    <Link to="/starships" className={isCurrentLocation('/starships') ? "menu__link menu__link--active" : "menu__link"}>Starships</Link>
                </li>
                <li className="menu-item">
                    <Link to="/planets" className={isCurrentLocation('/planets') ? "menu__link menu__link--active" : "menu__link"}>Planets</Link>
                </li>
                <li className="menu-item">
                    <Link to="/vehicles" className={isCurrentLocation('/vehicles') ? "menu__link menu__link--active" : "menu__link"}>Vehicles</Link>
                </li>
                <li className="menu-item">
                    <Link to="/species" className={isCurrentLocation('/species') ? "menu__link menu__link--active" : "menu__link"}>Species</Link>
                </li>
            </ul>
        </div>
    )
}  