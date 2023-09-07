import {baseApi} from "@/services/base-api.ts"

const decksApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<any,void>({
      query: () => {
        return {
          url: 'v1/decks',
          method: 'GET',
        }
      },
      providesTags: ['Decks'],
    }),
    createDeck: builder.mutation<any, { name: string }>({
      query: ({name}) => ({
        url: `v1/decks`,
        method: 'POST',
        body: { name },
      }),
      invalidatesTags: ['Decks']
    })
  })
})

export const { useGetDecksQuery, useCreateDeckMutation } = decksApi