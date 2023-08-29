import { useState } from 'react'

import { Button } from './src/components/ui'

import { Checkbox } from '@/src/components/ui/Checkbox/checkbox.tsx'

export function App() {
  let [checked, setCheked] = useState(true)

  return (
    <div>
      <Button as={'button'} variant="primary" disabled={true}>
        Button Primary
      </Button>
      <div>
        <Button as={'button'} variant="secondary" disabled={true}>
          Button Secondary
        </Button>
      </div>
      <div>
        <Button as={'button'} variant="tertiary" disabled={true}>
          Tertiary
        </Button>
      </div>

      <Checkbox checked={checked} onChange={setCheked} disabled={false} />
      <Checkbox label="Check-box" checked={checked} onChange={setCheked} disabled={true} />
      <Checkbox label="Check-box" checked={checked} onChange={setCheked} />
    </div>
  )
}
