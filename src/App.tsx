import {RadioElementType, RadioGroup} from '@/components/ui/RadioGroup/RadioGroup.tsx'
import {useState} from "react"

export function App() {

  const arr: RadioElementType[] = [
    { id: 'r1', value: 'default', label: 'Default' },
    { id: 'r2', value: 'comfortable', label: 'Comfortable' },
    { id: 'r3', value: 'compact', label: 'Compact' },
  ]
  const [value, setValue] = useState(arr[0].value)

  return (
    <div>
      <RadioGroup options={arr} onValueChange={setValue} value={value}/>
    </div>
  )
}
