import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
} from '@/services/decks/decks.service.ts'
import { useEffect, useState } from 'react'
import { Textfield } from '@/components/ui/Textfield'
import { Button } from '@/components/ui/Button'
import { useAppDispatch, useAppSelector } from '@/hooks.ts'
import { decksSlice } from '@/services/decks/decks.slice.ts'
import s from './deck-page.module.scss'
import { Column, Table } from '@/components/ui/Table'
import trashIcon from '@/assets/icons/trashIcon.png'
import { Sort } from '@/services/common/types.ts'
import { Deck } from '@/services/decks/deck.types.ts'

export const DecksPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const currentPage = useAppSelector(state => state.decks.currentPage)
  const dispatch = useAppDispatch()

  const updateCurrentPage = (page: number) => dispatch(decksSlice.actions.updateCurrentPage(page))
  const [search, setSearch] = useState('')
  const {
    currentData: decks,
    isLoading: decksLoading,
    isError: decksIsError,
  } = useGetDecksQuery({
    itemsPerPage,
    name: search,
    currentPage,
  })
  const [createDeck, { isLoading }] = useCreateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()

  // for sorting cells in table
  const [sort, setSort] = useState<Sort>(null)
  const sortString: string | null = sort ? `${sort?.key}-${sort?.direction}` : null
  const [sortArray, setSortArray] = useState<Deck[]>([])

  useEffect(() => {
    if (!sortString) {
      setSortArray(decks?.items as Deck[])
    } else {
      const [key, direction] = sortString.split('-')
      if (decks && decks?.items && key) {
        const sorted = [...decks?.items].sort((a, b) => {
          if (direction === 'asc') {
            return a[key as keyof typeof a] > b[key as keyof typeof b] ? 1 : -1
          }
          return a[key as keyof typeof a] < b[key as keyof typeof b] ? 1 : -1
        })
        setSortArray(sorted)
      }
    }
  }, [sortString, decks?.items])

  const columns: Column[] = [
    {
      key: 'name',
      title: 'Name',
      sortable: true,
    },
    {
      key: 'cardsCount',
      title: 'cardsCount',
      sortable: true,
    },
    {
      key: 'lastUpdated',
      title: 'Last Updated',
      sortable: true,
    },
    {
      key: 'createdBy',
      title: 'Created by',
      sortable: true,
    },
    {
      key: 'options',
      title: '',
    },
  ]

  if (decksLoading) return <div>Loading...</div>
  if (decksIsError) return <div>Error</div>

  return (
    <div className={s.component}>
      <div className={s.searchContainer}>
        <Textfield
          value={search}
          onChange={e => setSearch(e.currentTarget.value)}
          label={'Search by name'}
        />
      </div>
      <div className={s.buttonsContainer}>
        <Button
          onClick={() => {
            updateCurrentPage(1)
            createDeck({ name: 'New Deck 4' })
          }}
          disabled={isLoading}
        >
          Add new deck
        </Button>
        <Button onClick={() => setItemsPerPage(20)}>20 items per page</Button>
        <Button onClick={() => setItemsPerPage(10)}>10 items per page</Button>
      </div>

      <Table.Root className={s.tableContainer}>
        <Table.Header columns={columns} onSort={setSort} sort={sort} />
        <Table.Body>
          {sortArray &&
            sortArray.map(deck => {
              return (
                <Table.Row key={deck.id}>
                  <Table.Cell>{deck.name}</Table.Cell>
                  <Table.Cell>{deck.cardsCount}</Table.Cell>
                  <Table.Cell>{deck.updated}</Table.Cell>
                  <Table.Cell>{deck.author.name}</Table.Cell>
                  <Table.Cell>
                    <div className={s.iconContainer}>
                      <img
                        src={trashIcon}
                        alt=""
                        className={s.trashIcon}
                        onClick={() =>
                          deleteDeck({ id: deck.id })
                            .unwrap()
                            .catch(err => {
                              alert(err?.data?.message)
                            })
                        }
                      />
                    </div>
                  </Table.Cell>
                </Table.Row>
              )
            })}
        </Table.Body>
      </Table.Root>

      <div className={s.paginationContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
          <Button key={item} onClick={() => updateCurrentPage(item)}>
            {item}
          </Button>
        ))}
      </div>
    </div>
  )
}
