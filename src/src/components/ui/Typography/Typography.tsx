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
      case 'Body_1':
        return s.Body_1
      case 'Subtitle_1':
        return s.Subtitle_1
      case 'Body_2':
        return s.Body_2
      case 'Caption':
        return s.Caption
      case 'Overline':
        return s.Overline
      case 'Link_1':
        return s.Link_1
      case 'Link_2':
        return s.Link_2
      default:
        return ''
    }
  }

  const tagSelector = () => {
    switch (props.variant) {
      case 'H1':
        return <h1 className={classSelector()}>{props.children}</h1>
      case 'H2':
        return <h2 className={classSelector()}>{props.children}</h2>
      case 'H3':
        return <h2 className={classSelector()}>{props.children}</h2>
      default:
        return <div className={classSelector()}>{props.children}</div>
    }
  }

  return <>{tagSelector()}</>
}

type PropsType = {
  variant:
    | 'Large'
    | 'H1'
    | 'H2'
    | 'H3'
    | 'Body_1'
    | 'Subtitle_1'
    | 'Body_2'
    | 'Subtitle_2'
    | 'Caption'
    | 'Overline'
    | 'Link_1'
    | 'Link_2'
  children: ReactNode
}
