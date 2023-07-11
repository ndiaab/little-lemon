import { Link } from 'react-router-dom';
const menu = require('../data.json');
const Header = () => {
  return (
    <header>
      <nav>
        <ul data-testid="menu">
        {menu.map( (elm,index) => {return <Link to={elm.link} key={`link${index}`}><li key={`li${index}`}>{elm.title}</li></Link>})}
        </ul>
      </nav>
    </header>
  );
};

export default Header;