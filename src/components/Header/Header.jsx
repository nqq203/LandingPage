import './Header.css';

const Header = () => {
  return (
    <div className="header-navi">
      <h1>BAYSIDE FINE JEWERLY</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li> 
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          {/* <li><FontAwesomeIcon icon="fa-regular fa-bag-shopping" /></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Header