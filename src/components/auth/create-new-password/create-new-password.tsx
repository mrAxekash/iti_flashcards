import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './create-new-password.module.scss'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field'
import { Typography } from '@/components/ui/Typography'

const schema = z.object({
  password: z.string().min(6),
})

type FormType = z.infer<typeof schema>
type Props = {
  onSubmit: (data: FormType) => void
}
export const CreateNewPassword = (props: Props) => {
  const { control, handleSubmit } = useForm<FormType>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
    defaultValues: {
      password: '',
    },
  })
  const handleFormSubmitted = handleSubmit(props.onSubmit)

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography variant="Large" className={s.title}>
          Create new password
        </Typography>
        <form onSubmit={handleFormSubmitted}>
          <div className={s.input}>
            <ControlledTextField
              placeholder={'Password'}
              name={'password'}
              control={control}
              type={'password'}
            />
          </div>
          <Typography variant="Caption" className={s.instructions}>
            Create new password and we will send you further instructions to email
          </Typography>
          <Button fullWidth type={'submit'}>
            Create new password
          </Button>
        </form>
      </Card>
    </>
  )
}
