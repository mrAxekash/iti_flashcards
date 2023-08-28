import { DetailedHTMLProps, SelectHTMLAttributes } from 'react'

import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as RSelect from '@radix-ui/react-select'

import s from './Select.module.scss'

export const Select: React.FC<SelectPropsType> = (props: SelectPropsType) => {
  const mappedOptions = props.options.map((e, i) => (
    <RSelect.Item key={'option-' + i} className={s.item} value={e}>
      {e}
    </RSelect.Item>
  ))

  return (
    <RSelect.Root
      value={props.value}
      onValueChange={e => {
        props.onChangeOption(e)
        props.onClick && props.onClick(e)
      }}
      disabled={props.isDisabled ? props.isDisabled : false}
    >
      <RSelect.Trigger className={s.trigger}>
        <RSelect.Value aria-label={props.value}>{props.value}</RSelect.Value>
        <RSelect.Icon>
          <ChevronDownIcon />
        </RSelect.Icon>
      </RSelect.Trigger>
      <RSelect.Portal>
        <RSelect.Content className={s.content} position={'popper'}>
          <RSelect.ScrollUpButton />
          <RSelect.Viewport className={s.viewport}>{mappedOptions}</RSelect.Viewport>
          <RSelect.ScrollDownButton />
          <RSelect.Arrow />
        </RSelect.Content>
      </RSelect.Portal>
    </RSelect.Root>
  )
}

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>

export type SelectPropsType = DefaultSelectPropsType & {
  options: Array<string>
  value: string
  onChangeOption: (option: string) => void
  isDisabled?: boolean
  onClick?: (value: string) => void
}

// question:
/*
  if blank value passed then placeholder is ignoring
 */
