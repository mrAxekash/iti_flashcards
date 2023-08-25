import { useState } from 'react'

import { Pagination } from '@/src/components/ui/Pagination/Pagination.tsx'
import { Typography } from '@/src/components/ui/Typography/Typography.tsx'

export function App() {
  // const [value, setValue] = useState('Select-box')

  // For Pagination:
  const totalCount = 4861 // should come from server api
  const [pageCount, setPageCount] = useState(10)
  const [page, setPage] = useState(1)
  const values: Array<string> = ['5', '10', '20', '50', '100']
  const [value, setValue] = useState(values[0]) // for SuperSelect
  const onClickSelectHandler = () => {
    debugger
    setPageCount(+value)
  }

  return (
    <div>
      <Typography variant={'Subtitle_1'}>Header</Typography>
      <Typography variant={'Overline'}>Header</Typography>
      <Pagination
        cardPacksTotalCount={totalCount}
        pageCount={pageCount}
        onClickSelectHandler={onClickSelectHandler}
        selectSettings={{
          value: value,
          onChangeOption: setValue,
          arr: values,
        }}
        page={page}
        currentPageHandler={setPage}
      />
    </div>
  )
}
