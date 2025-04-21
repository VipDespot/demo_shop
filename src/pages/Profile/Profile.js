import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useForm, FormProvider, } from 'react-hook-form';
import style from './Profile.module.css';
import { useState } from 'react';
import { Text } from '@mantine/core';
import { FormField } from './FormField';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { STORAGE_KEYS } from '../../constants/storage';
const fieldsConfig = [
    { name: 'name', label: 'First Name' },
    { name: 'login', label: 'Login' },
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        validation: {
            required: true,
        },
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        validation: {
            required: true,
            minLength: 6,
        },
    },
    {
        name: 'birthDate',
        label: 'Date of Birth',
        type: 'date',
        validation: {
            required: true,
            validate: (value) => value <= new Date() || 'Birth date cannot be in future',
        },
    },
];
export const Profile = () => {
    const [user, setUser] = useLocalStorage(STORAGE_KEYS.USER_PROFILE, null);
    const [showPassword, setShowPassword] = useState(false);
    const methods = useForm({
        defaultValues: user || {
            name: '',
            login: '',
            email: '',
            password: '',
            birthDate: '',
        },
    });
    const { handleSubmit, reset } = methods;
    const onSubmit = (data) => {
        setUser(data);
        reset();
    };
    const handleClearUser = () => {
        setUser(null);
    };
    return (_jsx("div", { children: !user ? (_jsxs(_Fragment, { children: [_jsx("div", { className: style.create_profile, children: _jsx(Text, { size: "50px", ta: "center", pt: "50px", ff: "poppins", children: "Let's create a profile" }) }), _jsx(FormProvider, { ...methods, children: _jsxs("form", { onSubmit: handleSubmit(onSubmit), className: style.container, children: [fieldsConfig.map((field) => (_jsx(FormField, { name: field.name, label: field.label, type: field.type, validation: field.validation || { required: true } }, field.name))), _jsx("button", { type: "submit", className: style.submitButton, children: _jsx(Text, { c: "white", fw: 500, size: "16px", children: "Create Profile" }) })] }) })] })) : (_jsxs("div", { className: style.profileCard, children: [_jsxs("div", { className: style.profileHeader, children: [_jsx(Text, { c: "black", ff: "Arial", fw: 800, size: "30px", children: user.name }), _jsxs(Text, { c: "#718096", size: "14px", pt: "10px", children: ["@", user.login] })] }), _jsxs("div", { className: style.profileDetails, children: [_jsxs("div", { className: style.detailItem, children: [_jsx("span", { className: style.detailLabel, children: "Email:" }), _jsx("span", { className: style.detailValue, children: user.email })] }), _jsxs("div", { className: style.detailItem, children: [_jsx(Text, { fw: 500, c: "#4a5568", children: "Password:" }), _jsxs(Text, { c: "#2d3748", className: style.detailValue, children: [showPassword ? user.password : '••••••••', _jsx("button", { className: style.toggleButton, onClick: () => setShowPassword(!showPassword), children: _jsx(Text, { size: "20px", children: showPassword ? ' 🙈' : ' 👁️' }) })] })] }), _jsxs("div", { className: style.detailItem, children: [_jsx(Text, { fw: 500, c: "#4a5568", children: "Birth Date:" }), _jsx(Text, { c: "#2d3748", className: style.detailValue, children: user.birthDate })] })] }), _jsx("button", { className: style.editButton, onClick: () => {
                        handleClearUser();
                    }, children: "Edit Profile" })] })) }));
};
