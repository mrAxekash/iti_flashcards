import { Meta, StoryObj } from '@storybook/react'

import { Textfield } from './'

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'Components/Textfield',
  component: Textfield,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'password', 'search'],
      control: {
        type: 'radio',
      },
    },
  },
} satisfies Meta<typeof Textfield>

export default meta

type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    type: 'text',
    inputTitle: 'Input text',
  },
}
export const Password: Story = {
  args: {
    type: 'password',
    inputTitle: 'Input Pasword',
  },
}
export const Search: Story = {
  args: {
    type: 'search',
  },
}

export const Error: Story = {
  args: {
    type: 'search',
    inputTitle: 'Input search',
    error: 'Some error',
  },
}
