import { useState } from 'react'

import { Pagination } from '@/src/components/ui/Pagination/Pagination.tsx'
import { OptionType, Select } from '@/src/components/ui/Select/Select.tsx'
import { Typography } from '@/src/components/ui/Typography/Typography.tsx'

export function App() {
  const arr: Array<OptionType> = [
    { id: 1, value: 'value 1' },
    { id: 2, value: 'value 2' },
    { id: 3, value: 'value 3' },
  ]
  const [value, setValue] = useState('Select-box')

  // For Pagination:
  const totalCount = 4861 // should come from server api
  const [pageCount, setPageCount] = useState(10)
  const [page, setPage] = useState(1)
  const values = ['5', '10', '20', '50', '100'] // for SuperSelect
  const [valueForSsSr, onChangeOption] = useState(values[1]) // for SuperSelect
  const onClickSelectHandler = () => {
    setPageCount(+valueForSsSr)
  }

  return (
    <div>
      <Select options={arr} value={value} onChangeOption={setValue} isDisabled={true} />
      <Typography variant={'Subtitle_1'}>Header</Typography>
      <Typography variant={'Overline'}>Header</Typography>
      <Pagination
        cardPacksTotalCount={totalCount}
        pageCount={pageCount}
        onClickSelectHandler={onClickSelectHandler}
        superSelect={{
          valueForSsSr,
          onChangeOption,
          arr: values,
        }}
        page={page}
        currentPageHandler={setPage}
      />
    </div>
  )
}
