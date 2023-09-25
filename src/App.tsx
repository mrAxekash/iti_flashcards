import s from './App.module.scss'

import { TabSwitcher } from '@/components/ui/TabSwitcher/TabSwitcher.tsx'

export function App() {
  return (
    <div className={s.app}>
      <div className={s.container}>
        <TabSwitcher />
      </div>
    </div>
  )
}
