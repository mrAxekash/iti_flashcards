import { useState } from 'react'

const data = [
  {
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
  },
  {
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
  },
  {
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
  },
  {
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
  },
  {
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
  },
]

export const WithSort = () => {
  const [sort, setSort] = useState<Sort>(null)

  const handleSort = (key: string) => {
    if (sort && sort.key === key) {
      setSort({
        key,
        direction: sort.direction === 'asc' ? 'desc' : 'asc',
      })
    } else {
      setSort({
        key,
        direction: 'asc',
      })
    }

    console.log(console.log(sort))
  }

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>
            Name
            {sort && sort.key === 'name' && <span>{sort.direction === 'asc' ? '▲' : '▼'}</span>}
          </th>
          <th onClick={() => handleSort('cardsCount')}>Cards</th>
          <th onClick={() => handleSort('updated')}>Last Updated</th>
          <th onClick={() => handleSort('createdBy')}>Created by</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.title}>
            <td>{item.title}</td>
            <td>{item.cardsCount}</td>
            <td>{item.updated}</td>
            <td>{item.createdBy}</td>
            <td>icons...</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null
