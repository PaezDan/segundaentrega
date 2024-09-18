import logo from '../../assets/logo.svg';
import Menu from '../../components/Menu';
import CartWidget from '../../components/CartWidget';


const Header = () => {

  const links = [
    {
      label: 'Home',
      href: '#'
    },
    {
      label: 'Store',
      href: '#'
    },
    {
      label: 'Contact',
      href: '#'
    },
  ];

  return (
    <header className="header">
      <nav className="navbar container">
        <a className="navbar__logo" href="/">
          <figure className="navbar__img">
            <img src="../../../public/branding/logo.webp" height={100} alt="" />
          </figure>
        </a>
        <Menu className="navbar" links={links}>
          <li>
            <a href="" className='navbar__link-button'>
              <CartWidget quantity={0} />
            </a>
          </li>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;