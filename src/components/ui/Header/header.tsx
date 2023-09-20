import {ComponentProps, FC, useEffect, useState} from 'react'

import {clsx} from 'clsx'

import s from './header.module.scss'

import {Button} from '@/components/ui/Button'
import {Vector} from '@/components/ui/Button/vector.tsx'
import Logo from '@/components/ui/Header/logo.tsx'
import {useGetMeQuery} from "@/services/auth/auth.service.ts"

export type HeaderProps = ComponentProps<'header'>

export const Header: FC<HeaderProps> = ({ className, ...rest }) => {
  const {data: me} = useGetMeQuery()

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (me && me?.success === false) setIsLoggedIn(false)
    else setIsLoggedIn(true)
  }, [me])

  const classNames = {
    header: clsx(s.header, className),
  }

  return (
    <>
      <header className={classNames.header} {...rest}>
        <div className={s.wrapper}>
          <Logo />
          {isLoggedIn ? (
            <div className={s.containerNameAva}>
              <div className={s.name}>{me && me.name}</div>
              <div className={s.button}>avatar</div>
            </div>
          ) : (
            <Button className={s.button} variant="primary">
              <Vector />
              Sign In
            </Button>
          )}
        </div>
      </header>
    </>
  )
}
