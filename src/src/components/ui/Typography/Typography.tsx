import { ReactNode } from 'react'

import s from './Typography.module.scss'

export const Typography = (props: PropsType) => {
  const classSelector = () => {
    switch (props.variant) {
      case 'Large':
        return s.Large
      case 'H1':
        return s.H1
      case 'H2':
        return s.H2
      case 'H3':
        return s.H3
      case 'Body 1':
        return s.Body_1
      case 'Subtitle 1':
        return s.Subtitle_1
      case 'Body 2':
        return s.Body_2
      case 'Caption':
        return s.Caption
      case 'Overline':
        return s.Overline
      case 'Link 1':
        return s.Link_1
      case 'Link 2':
        return s.Link_2
      default:
        return ''
    }
  }

  return <>{<div className={classSelector()}>{props.children}</div>}</>
}

type PropsType = {
  variant:
    | 'Large'
    | 'H1'
    | 'H2'
    | 'H3'
    | 'Body 1'
    | 'Subtitle 1'
    | 'Body 2'
    | 'Subtitle 2'
    | 'Caption'
    | 'Overline'
    | 'Link 1'
    | 'Link 2'
  children: ReactNode
}
