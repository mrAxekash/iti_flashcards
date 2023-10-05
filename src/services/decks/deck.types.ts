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

type Direction = 'asc' | 'desc'
type Field = 'name' | 'updated'
export type DeckParams = {
  name?: string
  authorId?: string
  orderBy?: `${Field}-${Direction}`
  minCardsCount?: number
  maxCardsCount?: number
  currentPage?: number
  itemsPerPage?: number
}

// const orderBy: DeckParams['orderBy'] = 'updated-desc'
