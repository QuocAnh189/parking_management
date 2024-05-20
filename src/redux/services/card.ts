import { ICard } from "@/interfaces/models/card";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiCard = createApi({
  reducerPath: "apiCard",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  keepUnusedDataFor: 20,
  tagTypes: ["Card"],
  endpoints: (builder) => ({
    getAllCards: builder.query<ICard[], void>({
      query: () => ({
        url: "/card/",
        method: "GET",
      }),
      transformResponse: (response: any) => {
        return response.cards;
      },
      providesTags: ["Card"],
    }),

    getCard: builder.query<any, string>({
      query: (id) => ({
        url: `/card/${id}/`,
        method: "GET",
      }),
      providesTags: ["Card"],
    }),

    createCard: builder.mutation<any, ICard>({
      query: (data) => ({
        url: "/card/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Card"],
    }),

    updateCard: builder.mutation<any, { id: string; data: ICard }>({
      query: ({ id, data }) => ({
        url: `/card/${id}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Card"],
    }),
  }),
});

export const {
  useGetAllCardsQuery,
  useGetCardQuery,
  useCreateCardMutation,
  useUpdateCardMutation,
} = apiCard;
