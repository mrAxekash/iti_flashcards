import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from './signIn-form.tsx'

const meta = {
  title: 'Auth/SignInForm',
  component: SignInForm,
  tags: ['autodocs'],
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
