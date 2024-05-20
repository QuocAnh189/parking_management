import { LoginPayload, LoginResponse } from "@/interfaces/variable";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiAuth = createApi({
  reducerPath: "apiAuth",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  keepUnusedDataFor: 20,

  endpoints: (builder) => ({
    signUp: builder.mutation<any, any>({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),

    signIn: builder.mutation<LoginResponse, LoginPayload>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),

    getProfile: builder.query<any, void>({
      query: () => ({
        url: "/auth/profile",
        method: "GET",
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("token")!).accessToken
          }`,
        },
      }),
      transformResponse: (response: any) => response.data,
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = apiAuth;
