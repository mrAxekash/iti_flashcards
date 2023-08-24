import { Meta, StoryObj } from '@storybook/react'

import { Textfield } from './'

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Components/Textfield',
  component: Textfield,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'radio',
      },
    },
  },
} satisfies Meta<typeof Textfield>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    type: 'text',
  },
}
