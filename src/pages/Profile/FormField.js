import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import style from './Profile.module.css';
import { Text } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
export const FormField = ({ name, label, type, validation, }) => {
    const { register, formState: { errors }, control, } = useFormContext();
    const errorMessages = {
        email: 'Please enter a valid email',
        minLength: 'Password must be at least 6 characters',
        required: 'This field is required',
        pattern: 'Please enter a valid date',
        validate: 'Invalid date',
    };
    const getErrorMessage = (errorType) => {
        return errorMessages[errorType] || 'Invalid field';
    };
    return (_jsxs("div", { className: style.formGroup, children: [_jsx("label", { className: style.label, children: _jsx(Text, { c: "#2d3436", fw: 500, children: label }) }), type === 'date' ? (_jsx(Controller, { name: name, control: control, rules: validation, render: ({ field }) => (_jsx(DatePicker, { ...field, value: field.value ? new Date(field.value) : null, onChange: (date) => field.onChange(date?.toISOString()), maxDate: new Date(), className: style.input })) })) : (_jsx("input", { type: type, ...register(name, validation), className: style.input })), errors[name] && (_jsx(Text, { c: "#f78787", size: "10px", mt: "6px", className: style.error, children: getErrorMessage(errors[name].type) }))] }));
};
