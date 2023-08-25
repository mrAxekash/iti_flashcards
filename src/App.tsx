import { useState } from 'react'

import { Button } from './src/components/ui'

import { Checkbox } from '@/src/components/ui/Checkbox/checkbox.tsx'

export function App() {
  let [checked, setCheked] = useState(true)

  return (
    <div>
      <Button as={'button'}>Text</Button>
      <Checkbox label="some label" checked={checked} onChange={setCheked} disabled={true} />
      <Checkbox label="Check-box" disabled={false} />
    </div>
  )
}
