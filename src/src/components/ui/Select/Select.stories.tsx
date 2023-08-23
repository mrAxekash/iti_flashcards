import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { OptionType, Select } from './Select.tsx'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    isDisabled: {
      options: [true, false],
    },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState('Select-box')
    const arr: Array<OptionType> = [
      { id: 1, value: 'value 1' },
      { id: 2, value: 'value 2' },
      { id: 3, value: 'value 3' },
    ]

    return <Select {...args} options={arr} value={value} onChangeOption={setValue} />
  },

  args: {
    isDisabled: false,
    value: '',
    onChangeOption: () => {},
    options: [],
  },
}
