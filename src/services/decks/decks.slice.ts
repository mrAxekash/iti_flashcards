import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { maxCardsCountHard } from '@/pages/decks-page/maxCardsCount.tsx'

export const decksSlice = createSlice({
  name: 'decks',
  initialState: {
    itemsPerPage: '9',
    searchByName: '',
    cardsCounts: [0, maxCardsCountHard],
    currentPage: 1,
    selectValues: ['5', '9', '20', '50', '100'],
  },
  reducers: {
    setSearchByName: (state, action: PayloadAction<string>) => {
      state.searchByName = action.payload
    },
    updateCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setItemsPerPage: (state, action: PayloadAction<string>) => {
      state.itemsPerPage = action.payload
    },
    setCardsCounts: (state, action: PayloadAction<number[]>) => {
      state.cardsCounts = action.payload
    },
  },
})

export const { updateCurrentPage, setItemsPerPage, setSearchByName, setCardsCounts } =
  decksSlice.actions
