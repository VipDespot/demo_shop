import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from 'react-router';
import { useGetProductsByIdQuery } from '../../services/getApi';
import { ProductGelary } from '../ProductGelary/ProductGelary';
import style from './Passport.module.css';
import { Text } from '@mantine/core';
import { ButtonAddToCart } from '../Button/ButtonAddToCart';
import { CustomLoader } from '../CustomLoader';
export const Passport = () => {
    const productId = useParams();
    const { data: products } = useGetProductsByIdQuery(Number(productId.id));
    if (!products)
        return _jsx(CustomLoader, {});
    return (_jsxs("div", { className: style.passport, children: [_jsx("div", { className: style.gallery, children: _jsx(ProductGelary, { coverImgs: products?.images }) }), _jsxs("div", { className: style.description, children: [_jsxs("div", { className: style.title, children: [_jsx(Text, { size: "xl", fw: 600, c: "black", ff: "poppins", children: products?.title }), _jsxs(Text, { size: "xl", fw: 700, ff: "poppins", children: ["$ ", products?.price] }), _jsx(Text, { size: "sm", c: "gray", className: style.text, ff: "poppins", children: products?.description })] }), products && _jsx(ButtonAddToCart, { product: { ...products, quantity: 1 } })] })] }));
};
