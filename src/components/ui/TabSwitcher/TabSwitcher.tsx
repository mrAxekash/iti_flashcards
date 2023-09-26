import { useEffect } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './TabSwitcher.module.scss'

export const TabSwitcher = (props: PropsType) => {
  useEffect(() => {
    console.log(`Selected tab: ${props.activeTabIndex}`)
  }, [props.activeTabIndex])

  return (
    <Tabs.Root className={s.TabsRoot} defaultValue="tab1">
      <Tabs.List className={s.TabsList} aria-label="Manage your account">
        <Tabs.Trigger
          className={s.TabsTrigger}
          value="tab1"
          onClick={() => props.setActiveTabIndex(1)}
        >
          Switcher 1
        </Tabs.Trigger>
        <Tabs.Trigger
          className={s.TabsTrigger}
          value="tab2"
          onClick={() => props.setActiveTabIndex(2)}
        >
          Switcher 2
        </Tabs.Trigger>
        <Tabs.Trigger
          className={s.TabsTrigger}
          value="tab3"
          onClick={() => props.setActiveTabIndex(3)}
        >
          Switcher 3
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}

type PropsType = {
  activeTabIndex: number
  setActiveTabIndex: (index: number) => void
}
