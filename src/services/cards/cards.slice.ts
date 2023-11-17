import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    itemsPerPage: '9',
    id: '',
    currentPage: 1,
  },
  reducers: {
    setCardId: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    },
    updateCardsCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setCardsItemsPerPage: (state, action: PayloadAction<string>) => {
      state.itemsPerPage = action.payload
    },
  },
})

export const { setCardId, updateCardsCurrentPage, setCardsItemsPerPage } = cardsSlice.actions
