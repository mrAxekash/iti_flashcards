import {Link} from "react-router-dom"
import {useCreateDeckMutation, useGetDecksQuery} from "@/services/decks.ts"
import {Button} from "@/components/ui"

export const Decks = () => {
  const decks = useGetDecksQuery()
  const [createDeck] = useCreateDeckMutation()

  console.log(decks)
  if (decks.isLoading) return <div>Loading...</div>
  if (decks.isError) return <div>Error</div>

  return (
    <div>
      <Link to={'/2'}>go</Link>
      <Button
        onClick={() => {
          createDeck({name: '123'})
        }}
      >create deck</Button>
    </div>
  )
}