import {Pagination} from "@/components/ui/Pagination/Pagination.tsx"
import {useState} from "react"
import s from './App.module.scss'
export function App() {

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
    <div className={s.container}>
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
