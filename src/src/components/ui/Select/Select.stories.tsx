import { useState } from 'react'

import { Meta, StoryFn, StoryObj } from '@storybook/react'

// import {OptionType, Select} from '@/src/components/ui/Select/Select.tsx'
import { OptionType, Select, SelectPropsType } from './Select.tsx'

const DecoratorFn = (Story: StoryFn<SelectPropsType>) => {
  const [value, setValue] = useState('Select-box')
  const arr: Array<OptionType> = [
    { id: 1, value: 'value 1' },
    { id: 2, value: 'value 2' },
    { id: 3, value: 'value 3' },
  ]

  return <Story options={arr} value={value} onChangeOption={setValue} />
}

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  decorators: [DecoratorFn],
  argTypes: {
    isDisabled: {
      options: [true, false],
    },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isDisabled: false,
    value: '',
    onChangeOption: () => {},
    options: [],
  },
}
