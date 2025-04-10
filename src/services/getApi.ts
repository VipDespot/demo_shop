import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../types/api/Api.Products";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "products",
    }),
    getProductsById: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByIdQuery } = productsApi;


//https://fakestoreapi.com/products