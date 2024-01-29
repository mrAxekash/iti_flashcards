import { ChangeEvent, ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import s from './slider.module.scss'

import { Typography } from '@/components/ui/Typography'

export const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, name, title, value, onValueChange, onValueCommit, ...props }, ref) => {
  const [currentSliderValue, setCurrentSliderValue] = useState([value?.[0], value?.[1]])

  const onLeftInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentSliderValue([+e.currentTarget.value, value?.[1]])
  }
  const onRightInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentSliderValue([currentSliderValue[0], +e.currentTarget.value])
  }
  const applyValueCommit = () => {
    // let value1 = value?.[0]
    // let value2 = value?.[1]
    //
    // let newValue1 = value1
    // let newValue2 = value2
    //
    // if (value1 < props.min || value1 > props.max) {
    //   newValue1 = props.min
    // }
    //
    // if (value2 > props.max || value2 < props.min) {
    //   newValue2 = props.max
    // }

    onValueChange && onValueChange(currentSliderValue)
    onValueCommit && onValueCommit(currentSliderValue)
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
              id={'1'}
              onChange={onLeftInput}
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
          onValueCommit={applyValueCommit}
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
              id={'2'}
              value={currentSliderValue[1]}
              onChange={onRightInput}
              onBlur={applyValueCommit}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  applyValueCommit()
                }
              }}
            />
          </span>
        </div>
      </div>
    </div>
  )
})
