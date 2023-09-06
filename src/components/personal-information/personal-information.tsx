import { useState } from 'react'

import { clsx } from 'clsx'

import { Card } from '../ui/Card'
import { Typography } from '../ui/Typography'

import s from './personal-information.module.scss'

import { Edit } from '@/assets/icons/Edit.tsx'
import { Logout } from '@/assets/icons/Logout.tsx'
import { Button } from '@/components/ui'
import { Textfield } from '@/components/ui/Textfield'

type PersonalInformationType = {
  userName?: string
  email?: string
  avatar?: string
}
export const PersonalInformation = ({
  userName = 'Ivan',
  email = 'google-shmoogle.gsh.com',
  avatar,
}: PersonalInformationType) => {
  const classNames = {
    imageContainer: clsx(s.imageContainer),
    image: clsx(s.userPhoto),
    container: clsx(s.container),
    title: clsx(s.title),
    imageButton: clsx(s.imageButton),
    iconButton: clsx(s.icon),
    subtitleContainer: clsx(s.subtitleContainer),
    userName: clsx(s.userName),
    userEmail: clsx(s.userEmail),
    logButton: clsx(s.logButton),
    editModeContainer: clsx(s.editModeContainer),
    editModeButton: clsx(s.editModeButton),
  }

  const [editMode, setEditMode] = useState(false)
  const onClickHandler = () => {
    setEditMode(!editMode)
  }

  return (
    <Card className={classNames.container}>
      <Typography variant={'Large'} className={classNames.title}>
        Personal Information
      </Typography>
      <div className={classNames.imageContainer}>
        <img src={avatar} alt="personalImg" className={classNames.image} />
        {!editMode && (
          <Button variant={'secondary'} className={classNames.imageButton}>
            <Edit color={'var(--color-light-100)'} className={classNames.iconButton} />
          </Button>
        )}
      </div>
      {/*///////////////////////////////////////////*/}
      {editMode ? (
        <div className={classNames.editModeContainer}>
          <Textfield label={'Nickname'} type={'text'} placeholder={userName} onChange={() => {}} />
          <Button
            variant={'primary'}
            fullWidth={true}
            onClick={onClickHandler}
            className={classNames.editModeButton}
          >
            Save Changes
          </Button>
        </div>
      ) : (
        <>
          <div className={classNames.subtitleContainer}>
            <Typography variant={'H1'} className={classNames.userName}>
              {userName}
            </Typography>
            <Button variant={'link'} onClick={onClickHandler}>
              <Edit color={'var(--color-light-100)'} className={classNames.iconButton} />
            </Button>
          </div>
          <div>
            <Typography variant={'Body_2'} className={classNames.userEmail}>
              {email}
            </Typography>
          </div>

          <Button variant={'secondary'} className={classNames.logButton}>
            <Logout color={'var(--color-light-100)'} />
            Logout
          </Button>
        </>
      )}

      {/*////////*/}
    </Card>
  )
}
