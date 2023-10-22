import { OrderByType } from '@/common/types.ts'

export type Author = {
  id: string
  name: string
}

export type Deck = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string | null
  rating: number
  isDeleted?: boolean | null
  isBlocked?: boolean | null
  created: string
  updated: string
  cardsCount: number
  author: Author
}

type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type DecksResponse = {
  maxCardsCount: number
  items: Deck[]
  pagination: PaginationType
}

export type DeckParams = {
  name?: string
  authorId?: string
  orderBy?: OrderByType
  minCardsCount?: number
  maxCardsCount?: number
  currentPage?: number
  itemsPerPage?: number
}

export type LearnCardType = {
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  answerImg: string
  questionImg: string
  questionVideo: string
  answerVideo: string
  rating: 0
  created: string
  updated: string
}

export type DeckLearnArgType = {
  cardId: string
  grade: number
}

// const orderBy: DeckParams['orderBy'] = 'updated-desc'
