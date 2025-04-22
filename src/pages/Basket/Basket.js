import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from 'react-redux';
import styles from './Basket.module.css';
import { clearBasket, removeToBasket } from '../../store/slice/basketSlice';
import { Button, Text } from '@mantine/core';
import miniBasket from '../../images/ant-design_delete-filled.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
export const Basket = () => {
    const cartItem = useSelector((state) => state.basket.items);
    const dispatch = useDispatch();
    const handleClick = (id) => {
        dispatch(removeToBasket(id));
    };
    const sumPrice = cartItem.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.quantity;
    }, 0);
    console.log(sumPrice);
    return (_jsx("div", { className: styles.basket, children: cartItem.length !== 0 ? (_jsxs("div", { className: styles.cart, children: [_jsxs("div", { className: styles.cart_content, children: [_jsx(Text, { ff: "poppins", fw: 500, children: _jsxs("div", { className: styles.header, children: [_jsx("li", { className: styles.headerProduct, children: "Product" }), _jsx("li", { className: styles.headerPrice, children: "Price" }), _jsx("li", { className: styles.headerQuantity, children: "Quantity" }), _jsx("li", { className: styles.headerSubtotal, children: "Subtotal" })] }) }), cartItem.map((cart) => (_jsxs("div", { className: styles.products, children: [_jsx("img", { src: cart.images[0], className: styles.image }), _jsx(Text, { w: "130px", ff: "poppins", size: "16px", c: "gray", children: cart.title }), _jsxs(Text, { ff: "poppins", size: "md", fw: 900, c: "gray", children: ["$ ", cart.price] }), _jsx(Text, { ff: "poppins", ta: "center", className: styles.quantity, children: cart.quantity }), _jsxs(Text, { ff: "poppins", fw: 800, children: ["$ ", cart.quantity * cart.price] }), _jsx("img", { src: miniBasket, onClick: () => handleClick(cart.id) })] })))] }), _jsxs("div", { className: styles.allTotal, children: [_jsxs("div", { className: styles.total, children: [_jsx(Text, { ff: "poppins", fw: 600, size: "28px", children: "Cart Totals" }), _jsxs(Text, { ff: "poppins", size: "20px", fw: 550, children: ["Total: $", sumPrice] }), _jsx(Button, { variant: "outline", color: "green", size: "lg", className: styles.btn, children: "Pay" })] }), _jsx(Button, { variant: "outline", color: "rgba(115, 112, 32, 1)", size: "lg", onClick: () => dispatch(clearBasket()), children: "Remove all products" })] })] })) : (_jsxs(Text, { size: "60px", ff: "poppins", ta: "center", pt: "120px", children: ["Cart is empty", ' ', _jsx(FontAwesomeIcon, { icon: faCartShopping, size: "1x", color: "#ccc" })] })) }));
};
