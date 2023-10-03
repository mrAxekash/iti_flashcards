import { useState } from 'react'

import { clsx } from 'clsx'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import defaultAva from '../../assets/images/defaultAva.png'
import { Card } from '../ui/Card'
import { ControlledTextField } from '../ui/controlled/controlled-text-field'
import { Typography } from '../ui/Typography'

import s from './personal-information.module.scss'

import { Edit } from '@/assets/icons/Edit.tsx'
import { Logout } from '@/assets/icons/Logout.tsx'
import { Avatar } from '@/components/ui/Avatar/Avatar.tsx'
import { Button } from '@/components/ui/Button'

type PersonalInformationType = {
  userName?: string
  userEmail?: string
  avatar?: string | null
  onLogout?: () => void
  //onChange?: (avatar: string, email: string, name: string) => void
  //onChange?: any
  onChangeUserName?: (data: any) => void
  //onChangeAvatar?: (newAvatar: string) => void
}

const schema = z.object({
  // avatar: z.string(),
  name: z.string().min(1),
  // email: z.string().email(),
})

type FormValues = z.input<typeof schema>

// type FormValues = z.input<typeof schema>
export const PersonalInformation = ({
  userName = 'Ivan',
  userEmail = 'google-shmoogle.gsh.com',
  avatar = 'https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=826&t=st=1693944282~exp=1693944882~hmac=db975532c35e66aee49662f13349eb1ca1eab57963a6931222633c594a4f5a90',
  onChangeUserName,
  // onChangeAvatar,
  onLogout,
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

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      // avatar: '',
      name: userName,
      // email: userEmail,
    },
  })

  const handleFormSubmitted = handleSubmit(data => {
    onChangeUserName && onChangeUserName(data)
    setEditMode(!editMode)
  })
  // const onSubmit = (data: FormValues) => {
  //   console.log(data)
  // }

  const [editMode, setEditMode] = useState(false)

  const finalUrlAvatar = avatar ? avatar : defaultAva

  // const onChangeEditMode = () => {
  //   // onChangeAvatar && onChangeAvatar('newAvatar')
  //   // onChangeUserName && onChangeUserName('New Name')
  //   // onChange &&
  //   //   onChange(
  //   //     'https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=826&t=st=1693944282~exp=1693944882~hmac=db975532c35e66aee49662f13349eb1ca1eab57963a6931222633c594a4f5a90',
  //   //     userEmail,
  //   //     'Alex'
  //   //   )
  //
  //   setEditMode(!editMode)
  // }

  // const changeAvatarHandler = () => {
  //   onChangeAvatar && onChangeAvatar('newAvatar')
  // }
  //
  // const changeUserNameHandler = () => {
  //   onChangeUserName && onChangeUserName('New Name')
  // }

  const logoutHandler = () => {
    onLogout && onLogout()
  }

  return (
    <Card className={classNames.container}>
      <Typography variant={'Large'} className={classNames.title}>
        Personal Information
      </Typography>
      <div className={classNames.imageContainer}>
        <Avatar urlAdress={finalUrlAvatar} className={classNames.image} />
        {!editMode && (
          <Button
            variant={'secondary'}
            className={classNames.imageButton}
            onClick={() => setEditMode(true)}
          >
            <Edit color={'var(--color-light-100)'} className={classNames.iconButton} />
          </Button>
        )}
      </div>
      {editMode ? (
        <form onSubmit={handleFormSubmitted} className={classNames.editModeContainer}>
          <ControlledTextField name={'name'} control={control} label={'Nickname'} type={'text'} />
          <Button
            type="submit"
            variant={'primary'}
            fullWidth={true}
            // onClick={onChangeEditMode}
            className={classNames.editModeButton}
          >
            Save Changes
          </Button>
        </form>
      ) : (
        <>
          <div className={classNames.subtitleContainer}>
            <Typography variant={'H1'} className={classNames.userName}>
              {userName}
            </Typography>
            <Button variant={'link'} onClick={() => setEditMode(true)}>
              <Edit color={'var(--color-light-100)'} className={classNames.iconButton} />
            </Button>
          </div>
          <div>
            <Typography variant={'Body_2'} className={classNames.userEmail}>
              {userEmail}
            </Typography>
          </div>

          <Button variant={'secondary'} className={classNames.logButton} onClick={logoutHandler}>
            <Logout color={'var(--color-light-100)'} />
            Logout
          </Button>
        </>
      )}
    </Card>
  )
}
