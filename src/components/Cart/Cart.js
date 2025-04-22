import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Cart.module.css';
import { Text } from '@mantine/core';
import { Link } from 'react-router';
export const Cart = ({ products = [] }) => {
    console.log(products[0].images);
    return (_jsx("div", { className: styles.products, children: products?.map((product) => (_jsx(Link, { className: styles.cart, to: `/products/${product.id}`, children: _jsxs("div", { className: styles.content, children: [_jsx("div", { className: styles.cart_img, children: _jsx("img", { src: product.images[0], className: styles.sofa }) }), _jsx("div", { className: styles.information, children: _jsxs("div", { className: styles.information_content, children: [_jsx(Text, { c: "black", size: "md", ta: "left", fw: 700, ff: "poppins", children: product.title }), _jsx(Text, { size: "sm", ta: "left", fw: 350, c: "gray", ff: "poppins", children: product.slug }), _jsxs(Text, { size: "lg", c: "balack", fw: 600, ff: "poppins", className: styles.price, children: ["$ ", product.price] })] }) })] }) }))) }));
};
