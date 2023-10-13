import { useParams } from 'react-router-dom'

import { useGetDeckByIdQuery } from '@/services/decks/decks.service.ts'

export const CardsPage = () => {
  let { id } = useParams()

  const { data } = useGetDeckByIdQuery({ id: id ? id : '' })

  console.log('data')
  console.log(data)

  return (
    <div>
      <div>Deck with id: {id}</div> here
      <div>Deck with name: {data?.name}</div>
    </div>
  )
}
