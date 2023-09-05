import { clsx } from 'clsx'

import { Card } from '../ui/Card'
import { Typography } from '../ui/Typography'

import s from './personal-information.module.scss'

import { Edit } from '@/assets/icons/Edit.tsx'
import { Logout } from '@/assets/icons/Logout.tsx'
import { Button } from '@/components/ui'

type PersonalInformationType = {
  userName: string
  email: string
  avatar: string
}
export const PersonalInformation = ({
  userName = 'Ivan',
  email = 'google-shmoogle.gsh.com',
  avatar,
}: PersonalInformationType) => {
  const classNames = {
    imageContainer: clsx(s.imageContainer),
    image: clsx(s.userPhoto),
  }

  return (
    <Card>
      <Typography variant={'Large'}>Personal Information</Typography>
      <div className={classNames.imageContainer}>
        <img src={avatar} alt="personalImg" style={{ width: '96px', height: '96px' }} />
        <Button variant={'secondary'}>
          <Edit color={'var(--color-light-100)'} />
        </Button>
      </div>
      <div>
        <Typography variant={'H1'}>{userName}</Typography>
        <Button variant={'link'}>
          <Edit color={'var(--color-light-100)'} />
        </Button>
      </div>
      <div>
        <Typography variant={'Body_2'}>{email}</Typography>
      </div>

      <Button>
        <Logout />
        Logout
      </Button>
    </Card>
  )
}
