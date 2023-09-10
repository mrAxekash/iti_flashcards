import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

// eslint-disable-next-line import/order
import { clsx } from 'clsx'
import { MoreVerticalOutline } from '@/assets/icons/MoreVerticalOutline.tsx'

// import { Person } from '@/assets/icons/Person.tsx'
import s from '@/components/ui/DropDownMenu/DropDownMenu.module.scss'
import { Typography } from '@/components/ui/Typography'
// import { Typography } from '@/components/ui/Typography'

export type DropDownMenuType = {
  children?: ReactNode
  trigger?: ReactNode
  align?: 'start' | 'center' | 'end'
}
export const DropDownMenu: FC<DropDownMenuType> = ({
  children,
  trigger = <MoreVerticalOutline color={'var(--color-light-100)'} />,
  align = 'end',
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={s.button}>{trigger}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          avoidCollisions={true}
          align={align}
          className={s.dropDownMenuContent}
        >
          <DropdownMenu.Arrow width={15} height={8} className={s.dropDownMenuArrow} />
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export type DropdownMenuWithIconType = Omit<DropdownItemWithAvatarType, 'children'> & {
  icon?: ReactNode
  menuTitle?: string
} & ComponentPropsWithoutRef<'div'>
export const DropdownItemWithIcon: FC<DropdownMenuWithIconType> = ({
  icon,
  title,
  className,
  onSelect,
  disabled,
  ...rest
}) => {
  const classNames = {
    container: s.dropDownMenuItem,
    title: clsx(className),
  }

  return (
    <DropdownMenu.Item
      className={classNames.container}
      disabled={disabled}
      onSelect={onSelect}
      {...rest}
    >
      {icon}
      <Typography variant={'Caption'} className={classNames.title}>
        {title}
      </Typography>
    </DropdownMenu.Item>
  )
}

export type DropdownItemWithAvatarType = {
  children?: ReactNode
  disabled?: boolean
  onSelect?: (event: Event) => void
  className?: string
  trigger?: string
}
export const DropdownItemWithAvatar: FC<DropdownItemWithAvatarType> = ({
  children,
  disabled,
  trigger,
}) => {
  return (
    <DropdownMenu.Item disabled={disabled} className={s.dropDownMenuItem}>
      <img src={trigger} alt="userAvatar" className={s.userAvatar} />
      <div>{children}</div>
    </DropdownMenu.Item>
  )
}
