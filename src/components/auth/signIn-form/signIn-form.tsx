import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button.tsx'
import { Card } from '../../ui/Card'
import { Textfield } from '../../ui/Textfield'
import { Typography } from '../../ui/Typography'

import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox.tsx'
import sC from '@/styles/formStyles.module.scss'

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
      <div className={sC.outerContainer}>
        <Card className={sC.card}>
          <DevTool control={control} />
          <Typography variant={'H1'} className={sC.center}>
            Sign In
          </Typography>
          <div className={sC.values}>
            <div className={sC.element}>
              <Textfield
                {...register('email')}
                errorMessage={errors.email?.message}
                label={'email'}
              />
            </div>
            <div className={sC.element}>
              <Textfield
                {...register('password')}
                label={'Password'}
                type={'password'}
                errorMessage={errors.password?.message}
              />
            </div>
          </div>
          <ControlledCheckbox
            name={'rememberMe'}
            control={control}
            label={'remember me'}
            className={sC.checkbox}
            position={'left'}
          />
          <Typography variant={'Body_2'} className={sC.right}>
            Forgot Password?
          </Typography>
          <Button type="submit" className={sC.button}>
            Sign in
          </Button>
          <Typography variant={'Body_2'} className={clsx(sC.center, sC.colorLight)}>
            Don&apos;t have an account?
          </Typography>
          <Typography variant={'Link_1'} className={clsx(sC.center, sC.signUp)}>
            Sign In
          </Typography>
        </Card>
      </div>
    </form>
  )
}
