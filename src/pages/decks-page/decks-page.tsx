import {useCreateDeckMutation, useDeleteDeckMutation, useGetDecksQuery} from "@/services/decks/decks.service.ts"
import {useState} from "react"
import {Textfield} from "@/components/ui/Textfield"
import { Button } from "@/components/ui/Button"

export const DecksPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [search, setSearch] = useState('')
  const {currentData: decks, isLoading: decksLoading, isError: decksIsError} = useGetDecksQuery({
    itemsPerPage,
    name: search
  })
  const [createDeck, {isLoading}] = useCreateDeckMutation()
  const [deleteDeck] = useDeleteDeckMutation()

  if (decksLoading) return <div>Loading...</div>
  if (decksIsError) return <div>Error</div>

  return (
    <div>
      <Textfield value={search} onChange={e => setSearch(e.currentTarget.value)} label={'Search by name'}/>
      <Button
        onClick={() => {
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
              <td><Button onClick={() => deleteDeck({id: deck.id})}>delete</Button></td>
            </tr>
            )
        })
      }
        </tbody>
      </table>
    </div>
  )
}