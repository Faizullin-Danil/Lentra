import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/Lentra.png';
import { AppBar, Toolbar } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = () => {
  const location = useLocation()
  
  return (
    <AppBar position="fixed" className="!bg-black text-l">
      <Toolbar className="flex items-center">
        <img src={logo} className="w-30" alt="Logo" />
        
        <div className="flex gap-2 w-full justify-center gap-3">
          <Link to="/films" className={`text-gray-400 hover:text-white ${location.pathname === '/films' ? 'text-white' : ''}`}>Фильмы</Link>
          <Link to="/serials" className={`text-gray-400 hover:text-white ${location.pathname === '/serials' ? 'text-white' : ''}`}>Сериалы</Link>
        </div>

        <div className="ml-auto flex gap-3">
          <Link to="/favourites" >{<FavoriteIcon fontSize='small' className={`text-gray-400 hover:text-white ${location.pathname === '/favourites' ? 'text-white' : ''}`} />}</Link>
          <Link to="/login" className="">Войти</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
