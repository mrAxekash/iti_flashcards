import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './DropDownMenu.module.scss'

import { Logout } from '@/assets/icons/Logout.tsx'
import { Person } from '@/assets/icons/Person.tsx'
import { Typography } from '@/components/ui/Typography'

type DropDownMenuType = {
  avatar?: string
  userName?: string
  userEmail?: string
}
export const DropDownMenu = ({ avatar, userName, userEmail }: DropDownMenuType) => {
  return (
    <div style={{ marginLeft: '200px', marginTop: '30px' }}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className={s.button}>
            <img src={avatar} alt="avatar" className={s.userAvatar} />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            avoidCollisions={true}
            align={'end'}
            className={s.dropDownMenuContent}
          >
            <DropdownMenu.Arrow width={15} height={8} className={s.dropDownMenuArrow} />

            <DropdownMenu.Item className={s.dropDownMenuItem}>
              <img src={avatar} alt="avatar" className={s.userAvatar} />
              <div>
                <Typography variant={'Subtitle_2'} className={s.userName}>
                  {' '}
                  {userName}{' '}
                </Typography>
                <Typography variant={'Caption'} className={s.userEmail}>
                  {userEmail}
                </Typography>
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className={s.dropDownMenuSeparator} />
            <DropdownMenu.Item className={s.dropDownMenuItem}>
              <Person color={'var(--color-light-100)'} className={s.icons} />
              <Typography variant={'Caption'}>My Profile</Typography>{' '}
            </DropdownMenu.Item>
            <DropdownMenu.Separator className={s.dropDownMenuSeparator} />
            <DropdownMenu.Item className={s.dropDownMenuItem}>
              <Logout color={'var(--color-light-100)'} className={s.icons} />
              <Typography variant={'Caption'}>Sign Out</Typography>{' '}
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}
