import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as RSelect from '@radix-ui/react-select'

import s from './Select.module.scss'

export const Select = (props: PropsType) => {
  const mappedOptions = props.options.map(e => (
    <RSelect.Item key={e.id} className={s.item} value={e.value}>
      {e.value}
    </RSelect.Item>
  ))

  return (
    <RSelect.Root value={props.value} onValueChange={props.onChangeOption} disabled={props.isDisabled ? props.isDisabled : false}>
      <RSelect.Trigger className={s.trigger}>
        <RSelect.Value aria-label={props.value} className={s.value}>
          {props.value}
        </RSelect.Value>
        <RSelect.Icon>
          <ChevronDownIcon />
        </RSelect.Icon>
      </RSelect.Trigger>
      <RSelect.Portal>
        <RSelect.Content className={s.content}>
          <RSelect.ScrollUpButton />
          <RSelect.Viewport className={s.viewport}>{mappedOptions}</RSelect.Viewport>
          <RSelect.ScrollDownButton />
          <RSelect.Arrow />
        </RSelect.Content>
      </RSelect.Portal>
    </RSelect.Root>
  )
}

export type OptionType = {
  id: number
  value: string
}

type PropsType = {
  options: Array<OptionType>
  value: string
  onChangeOption: (option: string) => void
  isDisabled?: boolean
}

// question:
/*
  if blank value passed then placeholder is ignoring
 */
