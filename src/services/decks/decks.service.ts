import {baseApi} from "@/services/base-api.ts"
import {Deck, DeckParams, DecksResponse} from "@/services/decks/deck.types.ts"

const decksService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<DecksResponse, DeckParams>({
      query: params => ({
        url: 'v1/decks',
        method: 'GET',
        params: params ?? {},
      }),
      providesTags: ['Decks'],
    }),
    createDeck: builder.mutation<Deck, { name: string }>({
      query: data => ({
        url: `v1/decks`,
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(_, {dispatch, queryFulfilled}) {
        try {
        const response = await queryFulfilled

        dispatch(
          decksService.util.updateQueryData(
            'getDecks',
            {authorId: '1', currentPage: 1},
            draft => {
            draft.items.push(response.data)
          }
          )
        )
        } catch (error) {
          console.log(error)
        }

          /**
           * Alternatively, on failure you can invalidate the corresponding cache tags
           * to trigger a re-fetch:
           * dispatch(api.util.invalidateTags(['Post']))
           */

      },
      invalidatesTags: ['Decks'],
    }),
  }),
})

export const {useGetDecksQuery, useCreateDeckMutation} = decksService