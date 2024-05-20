import { IOHistory } from "@/interfaces/models/history";
import { InOutResponse } from "@/interfaces/variable";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiInOut = createApi({
  reducerPath: "apiInOut",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  keepUnusedDataFor: 20,
  tagTypes: ["InOut"],
  endpoints: (builder) => ({
    getAllInOuts: builder.query<IOHistory[], void>({
      query: (data) => ({
        url: "/in_out/all_io",
        method: "GET",
        body: data,
      }),
      transformResponse: (response: any) => {
        return response.io_list;
      },
      providesTags: ["InOut"],
    }),

    getInOutByUid: builder.query<IOHistory[], string>({
      query: (uid) => ({
        url: `/in_out/${uid}`,
        method: "GET",
      }),
      providesTags: ["InOut"],
    }),

    checkIn: builder.mutation<InOutResponse, FormData>({
      query: (data) => ({
        url: "/in_out/check_in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["InOut"],
    }),

    checkOut: builder.mutation<InOutResponse, FormData>({
      query: (data) => ({
        url: "/in_out/check_out",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["InOut"],
    }),
  }),
});

export const {
  useGetAllInOutsQuery,
  useGetInOutByUidQuery,
  useCheckInMutation,
  useCheckOutMutation,
} = apiInOut;
