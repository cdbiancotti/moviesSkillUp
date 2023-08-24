import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/listado">Listado</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                    <li>
                        <SearchBar />
                    </li>
                </ul>
            </nav>
        </header>
    );
};
