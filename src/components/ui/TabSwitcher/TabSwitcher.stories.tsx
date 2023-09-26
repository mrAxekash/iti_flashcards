import { useEffect, useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher, TabSwitcherValuesType } from '@/components/ui/TabSwitcher/TabSwitcher.tsx'

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

    const valuesArr: Array<TabSwitcherValuesType> = [
      { index: 1, value: 'tab1', text: 'Switcher 1' },
      { index: 2, value: 'tab2', text: 'Switcher 2' },
      { index: 3, value: 'tab3', text: 'Switcher 3' },
    ]

    return (
      <TabSwitcher
        {...args}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
        values={valuesArr}
      />
    )
  },

  args: {
    activeTabIndex: 0,
    setActiveTabIndex: () => {},
    values: [],
  },
}
