import React from 'react'
import { Link } from 'react-router'
import { CiShoppingBasket } from "react-icons/ci"
import styles from './Header.module.css'
import logo from '../../images/Frame 168.svg'
import basket from '../../images/ant-design_shopping-cart-outlined.svg'

function Header() {
  return (
    <div className={styles.header}>
     <div className={styles.header_content}>
       <div className={styles.logo}>
        <img src={logo}/>
       </div>
       <div className={styles.navigation}>
         <Link to='/' style={{textDecoration: 'none'}}>Home</Link>
         <Link to='/about' style={{textDecoration: 'none'}}>About</Link>
         <Link to='/contact' style={{textDecoration: 'none'}}>Contact</Link>
       </div>
       <div className={styles.settings}>
         <Link to='/basket'>
          <img src={basket}/>
         </Link>
       </div>
     </div>
    </div>
  )
}

export default Header


{/* <div className={styles.header}>
<img src={logo}/>
<Link to="/" className={styles.home}>Home</Link>
<Link to="/basket">
<CiShoppingBasket color='gray' size={25}/>
</Link>
</div> */}