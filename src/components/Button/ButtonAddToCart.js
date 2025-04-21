import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '@mantine/core';
import style from './Button.module.css';
import '../../index.css';
import { useDispatch } from 'react-redux';
import { addToBascet, removeToBasket } from '../../store/slice/basketSlice';
export const ButtonAddToCart = ({ product }) => {
    const dispatch = useDispatch();
    return (_jsxs("div", { className: style.buttons, children: [_jsx(Button, { variant: "outline", color: "var(--main-color-text)", size: "md", onClick: () => dispatch(addToBascet(product)), children: "Add To Cart" }), _jsx(Button, { variant: "outline", color: "var(--main-color-text)", size: "md", onClick: () => dispatch(removeToBasket(product.id)), children: "Remove from Cart" })] }));
};
