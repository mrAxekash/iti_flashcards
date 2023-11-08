import * as SliderPrimitive from '@radix-ui/react-slider'

import s from './SliderSingle.module.scss'

export const SliderSingle = (props: PropsType) => {
  return (
    <div className={s.container}>
      <span className={s.value}>{props.value}</span>
      <SliderPrimitive.Root className={s.root}>
        <SliderPrimitive.Track className={s.track}>
          <SliderPrimitive.Range className={s.range} />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className={s.thumb} />
      </SliderPrimitive.Root>
    </div>
  )
}

type PropsType = {
  defaultValue: number
  max: number
  step: number
  value: number
  onValueChange: () => void
}
