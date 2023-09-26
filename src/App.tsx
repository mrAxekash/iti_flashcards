import { useState } from 'react'

import s from './App.module.scss'

import { TabSwitcher, TabSwitcherValuesType } from '@/components/ui/TabSwitcher/TabSwitcher.tsx'

export function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(1)
  const valuesArr: Array<TabSwitcherValuesType> = [
    { index: 1, value: 'tab1', text: 'Switcher 1' },
    { index: 2, value: 'tab2', text: 'Switcher 2' },
    { index: 3, value: 'tab3', text: 'Switcher 3' },
  ]

  return (
    <div className={s.app}>
      <div className={s.container}>
        <TabSwitcher
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
          values={valuesArr}
        />
      </div>
    </div>
  )
}
