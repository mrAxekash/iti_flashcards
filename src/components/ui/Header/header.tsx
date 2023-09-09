import { ComponentProps, FC } from 'react'

import { clsx } from 'clsx'

import s from './header.module.scss'

import { Button } from '@/components/ui/Button'
import Logo from '@/components/ui/Header/logo.tsx'

export type HeaderProps = ComponentProps<'header'>

export const Header: FC<HeaderProps> = ({ className, ...rest }) => {
  const classNames = {
    header: clsx(s.header, className),
  }
  const isLogied = true

  return (
    <>
      <header className={classNames.header} {...rest}>
        <div className={s.wrapper}>
          <Logo />
          {isLogied ? (
            <div className={s.button}>avatar</div>
          ) : (
            <Button className={s.button} variant="primary">
              Sign In
            </Button>
          )}
        </div>
      </header>
    </>
  )
}
