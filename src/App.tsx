import s from './App.module.scss'

import { WithSort } from '@/components/ui/TableMy/TableMy.tsx'

export function App() {
  return (
    <div className={s.app}>
      {/*<Provider store={store}>
        <Header />
        <div className={s.container}>
          <Router />
        </div>
      </Provider>*/}
      <WithSort />
    </div>
  )
}
