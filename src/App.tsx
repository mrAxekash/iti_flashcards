import { useState } from 'react'

import { Button } from './src/components/ui'

import { Checkbox } from '@/src/components/ui/Checkbox/checkbox.tsx'

export function App() {
  let [checked, setCheked] = useState(true)

  return (
    <div>
      <Button as={'button'}>Text</Button>
      <Checkbox checked={checked} onChange={setCheked} />
      <Checkbox label="Check-box" checked={checked} onChange={setCheked} />
    </div>
  )
}
