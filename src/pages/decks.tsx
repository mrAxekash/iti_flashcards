import {useGetDecksQuery} from "@/services/base-api.ts"

export const Decks = () => {
  const decks = useGetDecksQuery()
  console.log(decks)
  if (decks.isLoading) return <div>Loading...</div>
  if (decks.isError) return <div>Error</div>

  return <div>{JSON.stringify(decks || '')}</div>
}