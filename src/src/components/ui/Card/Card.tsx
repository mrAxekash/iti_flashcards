import { ReactNode } from 'react'

import s from './Card.module.scss'

export const Card = (props: PropsType) => {
  return <div className={s.component}>{props.children}</div>
}

type PropsType = {
  children: ReactNode
}
