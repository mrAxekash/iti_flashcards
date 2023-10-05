import { FC, useMemo, useState } from 'react'

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

const columns: Array<Column> = [
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'createdBy',
    title: 'Created by',
  },
]

export const TableHeader: FC<TableHeaderType> = ({ columns, sort, onSort }) => {
  const handleSort = (key: string) => () => {
    if (!onSort) return

    if (sort?.key !== key) return onSort({ key, direction: 'asc' })

    if (sort.direction === 'desc') return onSort(null)

    return onSort({
      key,
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
    })
  }

  return (
    <thead>
      <tr>
        {columns.map(({ title, key }) => (
          <th key={key} onClick={handleSort(key)}>
            {title}
            {sort && sort.key === key && <span>{sort.direction === 'asc' ? '▲' : '▼'}</span>}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export const WithSort = () => {
  const [sort, setSort] = useState<Sort>(null)

  const sortedString = useMemo(() => {
    if (!sort) return null

    return `${sort.key}-${sort.direction}`
  }, [sort])

  console.log(console.log(sortedString))

  return (
    <table>
      <TableHeader columns={columns} sort={sort} onSort={setSort} />
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

type Column = {
  key: string
  title: string
}

type TableHeaderType = {
  columns: Column[]
  sort?: Sort
  onSort?: (sort: Sort) => void
}
