import { useState } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'
import './styles.css'

export const RadioGroupDemo = () => {
  const [value, setValue] = useState()
  const arr: ElementType[] = [
    { id: 'r1', value: 'default', label: 'Default' },
    { id: 'r2', value: 'comfortable', label: 'Comfortable' },
    { id: 'r3', value: 'compact', label: 'Compact' },
  ]

  const Element = (props: ElementType) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroup.Item className="RadioGroupItem" value={props.value} id={props.id}>
          <RadioGroup.Indicator className="RadioGroupIndicator" />
        </RadioGroup.Item>
        <label className="Label" htmlFor={props.id}>
          {props.label}
        </label>
      </div>
    )
  }

  return (
    <RadioGroup.Root
      className="RadioGroupRoot"
      defaultValue={arr[0].value}
      aria-label="View density"
      value={value}
    >
      {arr.map(e => (
        <Element key={e.id} id={e.id} value={e.value} label={e.label} />
      ))}
    </RadioGroup.Root>
  )
}

type ElementType = {
  id: string
  value: string
  label: string
}
