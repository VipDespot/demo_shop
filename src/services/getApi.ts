import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types/api/Api.Products';


export const productsApi = createApi ({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1/' }),
    endpoints: (builder) => ({
      getProducts: builder.query<Product[], void>({
        query: () => 'products',
  }),
 }),
})



export const { useGetProductsQuery } = productsApi;
console.log(useGetProductsQuery())

// export const postsApi = createApi({
//     reducerPath: 'postsApi',
//     baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
//     endpoints: (builder) => ({
//       getPosts: builder.query({
//         query: () => '/posts',
//       }),
//     }),
//   });
  
//   export const { useGetPostsQuery } = postsApi;