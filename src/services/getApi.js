import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => 'categories',
        }),
        getProducts: builder.query({
            query: ({ page, categoryId, limit }) => ({
                url: 'products',
                params: {
                    offset: (page - 1) * limit,
                    limit,
                    ...(categoryId !== undefined && { categoryId }),
                },
            }),
        }),
        getProductsById: builder.query({
            query: (id) => `products/${id}`,
        }),
    }),
});
export const { useGetCategoriesQuery, useGetProductsQuery, useGetProductsByIdQuery, } = productsApi;
