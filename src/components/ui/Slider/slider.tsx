import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import s from './slider.module.scss'

import { Typography } from '@/components/ui/Typography'

export const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, name, title, value, onValueChange, ...props }, ref) => {
  const [currentSliderValue, setCurrentSliderValue] = useState([value?.[0], value?.[1]])

  // const currentRef = useRef([props.min, props.max])

  const applyValueCommit = () => {
    // const value1 = currentSliderValue[0]
    // const value2 = currentSliderValue[1]
    //
    // let newValue1
    // let newValue2
    //
    // if (value1 < props.min || value1 > props.max) {
    //   newValue1 = props.min
    // } else {
    //   newValue1 = currentSliderValue[1]
    // }
    debugger
    props.onValueCommit && props.onValueCommit(currentSliderValue)
    onValueChange && onValueChange(currentSliderValue)
  }

  return (
    <div>
      {title && (
        <Typography variant={'Body_2'} as={'label'}>
          {title}
        </Typography>
      )}
      <div className={s.container}>
        <div>
          <span className={s.value}>
            <input
              onChange={e => {
                // props.onValueChange && props.onValueChange([+e.currentTarget.value, props.value[1]])
                setCurrentSliderValue([+e.currentTarget.value, value?.[1]])
              }}
              onBlur={applyValueCommit}
              value={currentSliderValue?.[0]}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  applyValueCommit()
                }
              }}
            />
          </span>
        </div>
        <SliderPrimitive.Root
          ref={ref}
          className={clsx(s.root, className)}
          value={currentSliderValue}
          onValueChange={e => {
            setCurrentSliderValue(e)
          }}
          {...props}
        >
          <SliderPrimitive.Track className={s.track}>
            <SliderPrimitive.Range className={s.range} />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className={s.thumb} />
          <SliderPrimitive.Thumb className={s.thumb} />
        </SliderPrimitive.Root>
        <div>
          <span className={s.value}>
            <input
              // value={props?.value?.[1]}
              value={currentSliderValue[1]}
              onChange={e => {
                setCurrentSliderValue([currentSliderValue[0], +e.currentTarget.value])
              }}
              // onChange={e => {
              //   props.onValueCommit &&
              //     props.onValueCommit(
              //       [props?.value?.[0] ? props?.value?.[0] : 0, +e.currentTarget.value]
              //       // [+e.currentTarget.value]
              //     )
              //   // props.onValueCommit && props.onValueCommit()
              //   props.onValueChange &&
              //     props.onValueChange([
              //       props?.value?.[0] ? props?.value?.[0] : 0,
              //       +e.currentTarget.value,
              //     ])
              // }}
            />
          </span>
        </div>
      </div>
    </div>
  )
})
