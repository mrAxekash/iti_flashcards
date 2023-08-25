import { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/src/components/ui/Card/Card.tsx'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return (
      <Card>
        <div>test text</div>
      </Card>
    )
  },
}
