import s from './App.module.scss'

import { TabSwitcher, TabSwitcherValuesType } from '@/components/ui/TabSwitcher/TabSwitcher.tsx'

export function App() {
  const valuesArr: Array<TabSwitcherValuesType> = [
    { index: 1, value: 'tab1', text: 'Switcher 1' },
    { index: 2, value: 'tab2', text: 'Switcher 2' },
    { index: 3, value: 'tab3', text: 'Switcher 3' },
  ]

  const onChange = (index: number) => {
    console.log(`Selected tab 111: ${index}`)
  }

  return (
    <div className={s.app}>
      <div className={s.container}>
        <TabSwitcher values={valuesArr} onChangeCallback={onChange} />
      </div>
    </div>
  )
}
