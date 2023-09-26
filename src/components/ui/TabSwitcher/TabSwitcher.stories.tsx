import { useEffect, useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from '@/components/ui/TabSwitcher/TabSwitcher.tsx'

const meta = {
  title: 'Components/TabSwitcher',
  component: TabSwitcher,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const [activeTabIndex, setActiveTabIndex] = useState(1)

    useEffect(() => {
      console.log(`Selected tab: ${activeTabIndex}`)
    }, [activeTabIndex])

    return (
      <TabSwitcher
        {...args}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
      />
    )
  },

  args: {
    activeTabIndex: 0,
    setActiveTabIndex: () => {},
  },
}
