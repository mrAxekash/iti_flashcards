import { useState } from 'react'

import { Button } from './src/components/ui'
import { Typography } from '@/src/components/ui/Typography/Typography.tsx'

import { Checkbox } from '@/src/components/ui/Checkbox/checkbox.tsx'

export function App() {
  let [checked, setCheked] = useState(true)

  return (
    <div>
      <Button as={'button'}>Text</Button>
      <Checkbox label="some label" checked={checked} onChange={setCheked} disabled={true} />
      <Checkbox label="Check-box" disabled={false} />
      <Typography variant={'Subtitle_1'}>Header</Typography>
      <Typography variant={'Overline'}>Header</Typography>
    </div>
  )
}
