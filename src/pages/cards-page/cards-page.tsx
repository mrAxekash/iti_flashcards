import { useParams } from 'react-router-dom'

export const CardsPage = () => {
  let { id } = useParams()

  return <div>Cards with id: {id} here</div>
}
