import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category, Product } from "../types/api/Api.Products";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "categories",
    }),
    getProducts: builder.query<Product[],{ page: number; categoryId?: number; limit: number }>({
      query: ({ page, categoryId, limit }) => ({
        url: "products",
        params: {
          offset: (page - 1) * limit,
          limit,
          ...(categoryId !== undefined && { categoryId }),
        },
      }),
    }),
    getProductsById: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductsByIdQuery,
} = productsApi;
