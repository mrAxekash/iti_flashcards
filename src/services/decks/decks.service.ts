import {baseApi} from "@/services/base-api.ts"
import {DeckParams, DecksResponse} from "@/services/decks/types.ts"

const decksApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<DecksResponse, DeckParams>({
      query: params => {
        return {
          url: 'v1/decks',
          method: 'GET',
          params: params ?? {},
        }
      },
      providesTags: ['Me'], // was ['Decks'] before my fix
    }),
    createDeck: builder.mutation<any, { name: string }>({
      query: ({name}) => ({
        url: `v1/decks`,
        method: 'POST',
        body: { name },
      }),
      invalidatesTags: ['Me'] // was ['Decks'] before my fix
    })
  })
})

export const { useGetDecksQuery, useCreateDeckMutation } = decksApi