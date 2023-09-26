import { useState } from 'react'

import s from './App.module.scss'

import { TabSwitcher } from '@/components/ui/TabSwitcher/TabSwitcher.tsx'

export function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(1)

  return (
    <div className={s.app}>
      <div className={s.container}>
        <TabSwitcher activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex} />
      </div>
    </div>
  )
}
