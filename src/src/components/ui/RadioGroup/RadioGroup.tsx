import * as RadioGroup from '@radix-ui/react-radio-group'
import './styles.css'

export const RadioGroupDemo = (props: PropsType) => {

  const Element = (props: RadioElementType) => {
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
      defaultValue={props.value}
      aria-label="View density"
      value={props.value}
      onValueChange={(e) => {props.onValueChange(e)}}
    >
      {props.options.map(e => (
        <Element key={e.id} id={e.id} value={e.value} label={e.label} />
      ))}
    </RadioGroup.Root>
  )
}

export type RadioElementType = {
  id: string
  value: string
  label: string
}

type PropsType = {
  value: string
  onValueChange: (e: string) => void
  options: Array<RadioElementType>
}