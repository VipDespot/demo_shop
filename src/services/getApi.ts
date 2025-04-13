import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category, Product } from "../types/api/Api.Products";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "categories",
    }),
    getProducts: builder.query<Product[],{ page: number; categoryId?: number }>({
      query: ({ page, categoryId }) => {
        const limit = 12;
        const offset = (page - 1) * limit;
        let url = `products?offset=${offset}&limit=${limit}`;

        if (categoryId) {
          url += `&categoryId=${categoryId}`;
        }
        return url;
      },
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
