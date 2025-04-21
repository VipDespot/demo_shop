import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Routes, Route } from 'react-router';
import '@mantine/dates/styles.css';
import Header from './pages/Header/Header';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Home } from './pages/Home/Home';
import { Passport } from './components/Product/Passport';
import { Basket } from './pages/Basket/Basket';
import { Profile } from './pages/Profile/Profile';
export const App = () => {
    return (_jsx(MantineProvider, { children: _jsxs("div", { children: [_jsx(Header, {}), _jsx("div", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/basket", element: _jsx(Basket, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/products/:id", element: _jsx(Passport, {}) }), _jsx(Route, { path: "/profile", element: _jsx(Profile, {}) })] }) })] }) }));
};
