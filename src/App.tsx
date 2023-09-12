import { useState } from 'react'

import { Slider } from '@/components/ui/Slider/slider.tsx'

export function App() {
  const [value, setValue] = useState([1, 10])

  return (
    <div>
      <Slider
        defaultValue={[1]}
        value={value}
        onValueChange={values => setValue(values)}
        step={1}
        min={1}
        max={10}
        minStepsBetweenThumbs={1}
      />
    </div>
  )
}
