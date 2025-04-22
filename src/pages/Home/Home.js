import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Cart } from '../../components/Cart/Cart';
import style from './Home.module.css';
import { useState } from 'react';
import { useGetCategoriesQuery, useGetProductsQuery, } from '../../services/getApi';
import { Select } from '@mantine/core';
import { useSelector } from 'react-redux';
import { CustomLoader } from '../../components/CustomLoader';
export const Home = () => {
    const limitPage = useSelector((state) => state.limited.productsPerPage);
    const [page, setPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { data: products, isLoading, isError, } = useGetProductsQuery({
        page: page,
        categoryId: selectedCategory || undefined,
        limit: limitPage,
    });
    const { data: categories } = useGetCategoriesQuery();
    const handleCategoryChange = (value) => {
        setSelectedCategory(value ? parseInt(value) : null);
        setPage(1);
    };
    if (isLoading) {
        _jsx("div", { children: "Loading...." });
    }
    if (isError)
        return _jsx("div", { children: "Error loading products" });
    const handleToNext = () => {
        setPage((prev) => prev + 1);
    };
    const handleToPrev = () => {
        setPage((prev) => Math.max(1, prev - 1));
    };
    if (!products)
        return _jsx(CustomLoader, {});
    return (_jsxs("div", { className: style.content, children: [_jsx(Select, { label: "Choose category", placeholder: "All categories", onChange: handleCategoryChange, data: [
                    { value: '', label: 'All Categories' },
                    ...(categories?.map((c) => ({
                        value: c.id.toString(),
                        label: c.name,
                    })) || []),
                ], clearable: true, allowDeselect: true }), _jsx(Cart, { products: products }), _jsxs("div", { className: style.paginationButtons, children: [_jsx("button", { className: style.btn, onClick: handleToPrev, disabled: page === 1, children: "\u2190 Previous" }), _jsx("button", { className: style.btn, onClick: handleToNext, disabled: products.length < limitPage, children: "Next \u2192" })] })] }));
};
