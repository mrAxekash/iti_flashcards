import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './DropDownMenu.module.scss'

import { Typography } from '@/components/ui/Typography'

type DropDownMenuType = {
  avatar?: string
  userName?: string
  userEmail?: string
}
export const DropDownMenu = ({ avatar, userName, userEmail }: DropDownMenuType) => {
  return (
    <div style={{ marginLeft: '100px', marginTop: '30px' }}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          {/*<button className={s.button}>*/}
          <img src={avatar} alt="avatar" className={s.userAvatar} />
          {/*</button>*/}
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className={s.dropDownMenuContent}>
            <DropdownMenu.Arrow width={10} height={8} className={s.dropDownMenuArrow} />

            <DropdownMenu.Item className={s.dropDownMenuItem}>
              <img src={avatar} alt="avatar" className={s.userAvatar} />
              <div>
                <Typography variant={'Subtitle_2'}> {userName} </Typography>
                <Typography variant={'Caption'}>{userEmail}</Typography>
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Typography variant={'Caption'}>My Profile</Typography>{' '}
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Typography variant={'Caption'}>Sign Out</Typography>{' '}
            </DropdownMenu.Item>

            <DropdownMenu.Group>
              <DropdownMenu.Item />
            </DropdownMenu.Group>

            <DropdownMenu.CheckboxItem>
              <DropdownMenu.ItemIndicator />
            </DropdownMenu.CheckboxItem>

            <DropdownMenu.RadioGroup>
              {/*<DropdownMenu.RadioItem>*/}
              {/*  <DropdownMenu.ItemIndicator />*/}
              {/*</DropdownMenu.RadioItem>*/}
            </DropdownMenu.RadioGroup>

            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger />
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent />
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>

            <DropdownMenu.Separator />
            <DropdownMenu.Arrow />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}
