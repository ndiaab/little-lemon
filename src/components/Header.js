import { Link } from 'react-router-dom';
const menu = require('../data.json');
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
        {menu.map( elm => {return <Link to={elm.link}><li key={elm.title}>{elm.title}</li></Link>})}
        </ul>
      </nav>
    </header>
  );
};

export default Header;