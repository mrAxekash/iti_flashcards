import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './Pagination.tsx'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {

    // For Pagination:
    const totalCount = 4861 // should come from server api
    const [pageCount, setPageCount] = useState(10)
    const [page, setPage] = useState(1)
    const values: Array<string> = ['5', '10', '20', '50', '100']
    const [value, setValue] = useState(values[0]) // for SuperSelect
    const onClickSelectHandler = () => {
      setPageCount(+value)
    }

    return <Pagination
      {...args}
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
  },
}
