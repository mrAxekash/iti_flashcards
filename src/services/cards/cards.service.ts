import { baseApi } from '@/services/base-api.ts'
import { decksService } from '@/services/decks/decks.service.ts'
import { RootState } from '@/services/store.ts'
const cardsService = baseApi.injectEndpoints({
  endpoints: builder => ({
    deleteCard: builder.mutation<{}, { id: string }>({
      query: data => ({
        url: `/v1/cards/${data.id}`,
        method: 'DELETE',
      }),
      onQueryStarted: async ({ id }, { getState, queryFulfilled, dispatch }) => {
        const state = getState() as RootState
        const { id: deckId } = state.cards

        const patchResult = dispatch(
          decksService.util.updateQueryData('getCardsInDeck', { id: deckId }, draft => {
            draft?.items?.splice(draft?.items?.findIndex(card => card?.id === id), 1)
          })
        )

        try {
          await queryFulfilled
        } catch (e) {
          patchResult.undo()
        }
      },
      invalidatesTags: ['CardsIdDeck'],
    }),
  }),
})

export const { useDeleteCardMutation } = cardsService
