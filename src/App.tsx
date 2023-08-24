import { Button } from './src/components/ui'

import { Textfield } from '@/src/components/ui/Textfield'

export function App() {
  return (
    <div>
      <Button as={'button'}>Text</Button>
      <Textfield type={'search'} inputTitle={'Cards APP'} />
    </div>
  )
}
