import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router';
import styles from './Header.module.css';
import logo from '../../images/SHOP.CO.svg';
import basket from '../../images/ant-design_shopping-cart-outlined.svg';
import { Avatar } from '@mantine/core';
function Header() {
    return (_jsx("div", { className: styles.header, children: _jsxs("div", { className: styles.header_content, children: [_jsx("div", { className: styles.logo, children: _jsx("img", { src: logo }) }), _jsxs("div", { className: styles.navigation, children: [_jsx(Link, { to: "/", children: "Home" }), _jsx(Link, { to: "/about", children: "About" }), _jsx(Link, { to: "/contact", children: "Contact" })] }), _jsxs("div", { className: styles.settings, children: [_jsx(Link, { to: "/basket", children: _jsx("img", { src: basket }) }), _jsx(Link, { to: '/profile', children: _jsx(Avatar, { src: null, alt: "no image here" }) })] })] }) }));
}
export default Header;
