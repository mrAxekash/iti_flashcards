import {useCreateDeckMutation, useDeleteDeckMutation, useGetDecksQuery} from "@/services/decks/decks.service.ts"
import {useEffect, useState} from "react"
import {Textfield} from "@/components/ui/Textfield"
import {Button} from "@/components/ui/Button"
import {useAppDispatch, useAppSelector} from "@/hooks.ts"
import {decksSlice} from "@/services/decks/decks.slice.ts"

export const DecksPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const currentPage = useAppSelector(state => state.decks.currentPage)
  const dispatch = useAppDispatch()

  const updateCurrentPage = (page: number) => dispatch(decksSlice.actions.updateCurrentPage(page))
  const [search, setSearch] = useState('')
  const {currentData: decks, isLoading: decksLoading, isError: decksIsError} = useGetDecksQuery({
    itemsPerPage,
    name: search,
    currentPage,
  })
  const [createDeck, {isLoading}] = useCreateDeckMutation()
  const [deleteDeck, {error}] = useDeleteDeckMutation()

  useEffect(() => { // error handling v2
      if (!error) return
      // @ts-ignore
      alert(error?.data?.message)
    }, [error]
  )

  if (decksLoading) return <div>Loading...</div>
  if (decksIsError) return <div>Error</div>

  return (
    <div>
      <Textfield value={search} onChange={e => setSearch(e.currentTarget.value)} label={'Search by name'}/>
      <Button
        onClick={() => {
          updateCurrentPage(1)
          createDeck({name: 'New Deck 4'})
        }}
        disabled={isLoading}
      >
        Add new deck
      </Button>
      <Button onClick={() => setItemsPerPage(20)}>20 items per page</Button>
      <Button onClick={() => setItemsPerPage(10)}>10 items per page</Button>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Cards</th>
          <th>Updated</th>
          <th>Created By</th>
        </tr>
        </thead>
        <tbody>
        {
          decks?.items?.map((deck) => {
            return (
              <tr key={deck.id}>
                <td>{deck.name}</td>
                <td>{deck.cardsCount}</td>
                <td>{deck.updated}</td>
                <td>{deck.author.name}</td>
                <td><Button onClick={
                  () =>
                    deleteDeck({id: deck.id}) // error handling v1
                  // .unwrap()
                  // .catch((err) => {
                  //     alert(err?.data?.message)
                  //   }
                  // )
                }>delete</Button></td>
              </tr>
            )
          })
        }
        </tbody>
      </table>

      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <Button key={item} onClick={() => updateCurrentPage(item)}>
          {item}
        </Button>
      ))}
    </div>
  )
}