import { useState } from 'react'

import { OptionType, Select } from '@/src/components/ui/Select/Select.tsx'

export function App() {
  const arr: Array<OptionType> = [
    { id: 1, value: 'value 1' },
    { id: 2, value: 'value 2' },
    { id: 3, value: 'value 3' },
  ]
  const [value, setValue] = useState('Select-box')

  return (
    <div>
      <Select options={arr} value={value} onChangeOption={setValue} />
    </div>
  )
}
