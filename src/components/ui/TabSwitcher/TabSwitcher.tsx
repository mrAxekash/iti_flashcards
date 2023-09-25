import { useEffect, useState } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './TabSwitcher.module.scss'

export const TabSwitcher = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(1)

  useEffect(() => {
    console.log(`Selected tab: ${activeTabIndex}`)
  }, [activeTabIndex])

  return (
    <Tabs.Root className={s.TabsRoot} defaultValue="tab1">
      <Tabs.List className={s.TabsList} aria-label="Manage your account">
        <Tabs.Trigger className={s.TabsTrigger} value="tab1" onClick={() => setActiveTabIndex(1)}>
          Switcher 1
        </Tabs.Trigger>
        <Tabs.Trigger className={s.TabsTrigger} value="tab2" onClick={() => setActiveTabIndex(2)}>
          Switcher 2
        </Tabs.Trigger>
        <Tabs.Trigger className={s.TabsTrigger} value="tab3" onClick={() => setActiveTabIndex(3)}>
          Switcher 3
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}
