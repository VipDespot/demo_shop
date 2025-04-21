import { Link } from 'react-router';
import styles from './Header.module.css';
import logo from '../../images/SHOP.CO.svg';
import basket from '../../images/ant-design_shopping-cart-outlined.svg';
import { Avatar } from '@mantine/core';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <div className={styles.navigation}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className={styles.settings}>
          <Link to="/basket">
            <img src={basket} />
          </Link>
          <Link to='/profile'>
            <Avatar src={null} alt="no image here" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
