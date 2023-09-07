import { Meta } from '@storybook/react'

import { Slider } from '@/components/ui/Slider/slider.tsx'

export default {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>

export const SliderExample = {
  args: {},
}
