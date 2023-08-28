import { useState } from 'react'

import { Select } from './src/components/ui/Select'

import { Checkbox } from '@/src/components/ui/Checkbox/checkbox.tsx'
import { Pagination } from '@/src/components/ui/Pagination/Pagination.tsx'
import { Typography } from '@/src/components/ui/Typography/Typography.tsx'

export function App() {
  //For Select:
  const [valueSelectFirst, setValueSelectFirst] = useState('Select-box')
  const arr: Array<string> = ['value 1', 'value 2', 'value 3']
  let [checked, setCheked] = useState(true)

  // For Pagination:
  const totalCount = 4861 // should come from server api
  const [pageCount, setPageCount] = useState(10)
  const [page, setPage] = useState(1)
  const values: Array<string> = ['5', '10', '20', '50', '100']
  const [value, setValue] = useState(values[0]) // for SuperSelect
  const onClickSelectHandler = () => {
    setPageCount(+value)
  }

  return (
    <div>
      <Typography variant={'Subtitle_1'}>Header</Typography>
      <Typography variant={'Overline'}>Header</Typography>
      <Select value={valueSelectFirst} onChangeOption={setValueSelectFirst} options={arr} />
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
      <Checkbox checked={checked} onChange={setCheked} disabled={false} />
      <Checkbox label="Check-box" checked={checked} onChange={setCheked} disabled={true} />
      <Checkbox label="Check-box" checked={checked} onChange={setCheked} />
    </div>
  )
}
