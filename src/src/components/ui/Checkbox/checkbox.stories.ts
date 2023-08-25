import type { Meta } from '@storybook/react'

import { Checkbox_ } from '@/src/components/ui/Checkbox/Checkbox_.tsx'

export default {
  title: 'Components/Checkbox_',
  component: Checkbox_,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox_>

export const WithLabel = {
  args: {
    label: 'Check-box',
    disabled: false,
  },
}

export const WithoutLabel = {
  args: {
    label: '',
    disabled: false,
  },
}
