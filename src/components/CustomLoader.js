import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Loader, Text, Stack } from '@mantine/core';
export const CustomLoader = () => {
    return (_jsxs(Stack, { align: "center", gap: "xs", mt: "150px", children: [_jsx(Loader, { size: "lg", variant: "dots", color: "grape" }), _jsx(Text, { c: "dimmed", size: "sm", children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u0430\u043D\u043D\u044B\u0445..." })] }));
};
