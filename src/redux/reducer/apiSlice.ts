import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3100/api/v1' }),
  tagTypes: ['Menus'],
  endpoints: (builder) => ({
    getMenus: builder.query({
      query: () => '/menus/category',
      providesTags: ['Menus'],
    }),
  }),
});

export const { useGetMenusQuery } = apiSlice;
