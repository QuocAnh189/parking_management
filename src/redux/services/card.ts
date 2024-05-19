import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiCard = createApi({
  reducerPath: "apiCard",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  keepUnusedDataFor: 20,

  endpoints: (builder) => ({
    signUp: builder.mutation<any, any>({
      query: (data) => ({
        url: "/card",
        method: "POST",
        body: data,
      }),
      transformResponse: (response: any) => response.data,
    }),

    signIn: builder.mutation<any, any>({
      query: (data) => ({
        url: "/card/:id",
        method: "PUT",
        body: data,
      }),
      transformResponse: (response: any) => response.data,
    }),

    getProfile: builder.query<any, any>({
      query: () => ({
        url: "/card",
        method: "POST",
      }),
      transformResponse: (response: any) => response.data,
    }),
  }),
});
