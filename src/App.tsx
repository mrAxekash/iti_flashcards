// import s from './App.module.scss'
//
// import { DropDownMenu3 } from '@/components/ui/DropDownMenu3/DropDownMenu3.tsx'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './App.module.scss'

import { Logout } from '@/assets/icons/Logout.tsx'
import { Person } from '@/assets/icons/Person.tsx'
import {
  DropdownItemWithAvatar,
  DropdownItemWithIcon,
  DropDownMenu,
} from '@/components/ui/DropDownMenu/DropDownMenu.tsx'
import { Typography } from '@/components/ui/Typography'
export function App() {
  return (
    <div style={{ marginLeft: '200px' }}>
      <DropDownMenu
        trigger={
          <img
            src={
              'https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=826&t=st=1693944282~exp=1693944882~hmac=db975532c35e66aee49662f13349eb1ca1eab57963a6931222633c594a4f5a90'
            }
            alt="avatar"
            className={s.userAvatar}
          />
        }
      >
        <DropdownItemWithAvatar
          trigger={
            'https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=826&t=st=1693944282~exp=1693944882~hmac=db975532c35e66aee49662f13349eb1ca1eab57963a6931222633c594a4f5a90'
          }
        >
          <Typography variant={'Subtitle_2'} className={s.userName}>
            Alex
          </Typography>
          <Typography variant={'Caption'} className={s.userEmail}>
            dododododod@gmail.com
          </Typography>
        </DropdownItemWithAvatar>
        <DropdownMenu.Separator className={s.dropDownMenuSeparator} />
        <DropdownItemWithIcon
          icon={<Person color={'var(--color-light-100)'} className={s.icons} />}
          className={s.dropDownMenuItem}
          title={'My Profile'}
        />
        <DropdownMenu.Separator className={s.dropDownMenuSeparator} />
        <DropdownItemWithIcon
          icon={<Logout color={'var(--color-light-100)'} className={s.icons} />}
          title={'Sign Out'}
        />
      </DropDownMenu>
    </div>
  )
}
