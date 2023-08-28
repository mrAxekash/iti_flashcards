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
    <RadioGroup.Root className="RadioGroupRoot" defaultValue="default" aria-label="View density">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroup.Item className="RadioGroupItem" value="default" id="r1">
          <RadioGroup.Indicator className="RadioGroupIndicator" />
        </RadioGroup.Item>
        <label className="Label" htmlFor="r1">
          Default
        </label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroup.Item className="RadioGroupItem" value="comfortable" id="r2">
          <RadioGroup.Indicator className="RadioGroupIndicator" />
        </RadioGroup.Item>
        <label className="Label" htmlFor="r2">
          Comfortable
        </label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroup.Item className="RadioGroupItem" value="compact" id="r3">
          <RadioGroup.Indicator className="RadioGroupIndicator" />
        </RadioGroup.Item>
        <label className="Label" htmlFor="r3">
          Compact
        </label>
      </div>
    </RadioGroup.Root>
  )
}

type ElementType = {
  id: string
  value: string
  label: string
}
