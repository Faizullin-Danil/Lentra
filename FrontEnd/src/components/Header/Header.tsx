import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  return (
    <div className="Header w-[10%]">
        <Link to="/" className="lg:ml-22">
          <h1 className="">Фильмы</h1>
        </Link>
        <Link to="/FavouritesFilmsPage" className="lg:mr-22">
          <h2 className="">Избранное</h2>
        </Link>
    </div>
  );
};

export default Header;
