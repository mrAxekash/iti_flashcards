import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'

import s from './signIn-form.module.scss'

import { ControlledCheckbox } from '@/src/components/ui/controlled/controlled-checkbox/controlled-checkbox.tsx'
import { Textfield } from '@/src/components/ui/Textfield'
import { Typography } from '@/src/components/ui/Typography'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.input<typeof schema>

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.outerContainer}>
        <div className={s.innerContainer}>
          <DevTool control={control} />
          <Typography variant={'H1'}>Sign In</Typography>
          <Textfield {...register('email')} errorMessage={errors.email?.message} label={'email'} />
          <Textfield {...register('password')} label={'password'} />
          <ControlledCheckbox name={'rememberMe'} control={control} label={'remember me'} />
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  )
}
