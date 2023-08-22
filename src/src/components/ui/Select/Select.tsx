import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as RSelect from '@radix-ui/react-select'

import s from './Select.module.scss'

export const Select = () => {
  return (
    <RSelect.Root>
      <RSelect.Trigger className={s.trigger}>
        <RSelect.Value placeholder="Select box" />
        <RSelect.Icon>
          <ChevronDownIcon />
        </RSelect.Icon>
      </RSelect.Trigger>
      <RSelect.Portal>
        <RSelect.Content className={s.content}>
          <RSelect.ScrollUpButton />
          <RSelect.Viewport className={s.viewport}>
            <RSelect.Item className={s.item} value="value1">
              Item 1
            </RSelect.Item>
            <RSelect.Item className={s.item} value="value1">
              Item 2
            </RSelect.Item>
            <RSelect.Item className={s.item} value="value1">
              Item 3
            </RSelect.Item>
          </RSelect.Viewport>
          <RSelect.ScrollDownButton />
          <RSelect.Arrow />
        </RSelect.Content>
      </RSelect.Portal>
    </RSelect.Root>
  )
}
