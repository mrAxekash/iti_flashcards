import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'

import s from './signIn-form.module.scss'

import { Card } from '@/src/components/ui/Card'
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
        <Card>
          <DevTool control={control} />
          <Typography variant={'H1'} className={s.center}>
            Sign In
          </Typography>
          <div className={s.values}>
            <Textfield
              {...register('email')}
              errorMessage={errors.email?.message}
              label={'email'}
            />
            <Textfield {...register('password')} label={'password'} />
          </div>
          <ControlledCheckbox
            name={'rememberMe'}
            control={control}
            label={'remember me'}
            className={s.checkbox}
            position={'left'}
          />
          <Typography variant={'Body_2'} className={s.right}>
            Forgot Password?
          </Typography>
          <Button type="submit" className={s.button}>
            Sign in
          </Button>
          <Typography variant={'Body_2'} className={clsx(s.center, s.colorLight)}>
            Don&apos;t have an account?
          </Typography>
          <Typography variant={'Link_1'} className={clsx(s.center, s.signUp)}>
            Sign Up
          </Typography>
        </Card>
      </div>
    </form>
  )
}
