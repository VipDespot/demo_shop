import { Link } from "react-router";
import styles from "./Header.module.css";
import logo from "../../images/SHOP.CO.svg";
import basket from "../../images/ant-design_shopping-cart-outlined.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function Header() {
  const count = useSelector((state: RootState) => state.basket.items);
  // console.log(count.length + count[0].quantity)
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
        </div>
      </div>
    </div>
  );
}

export default Header;
