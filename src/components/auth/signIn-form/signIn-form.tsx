import {DevTool} from '@hookform/devtools'
import {zodResolver} from '@hookform/resolvers/zod'
import {clsx} from 'clsx'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

import {Button} from '../../ui/button.tsx'
import {Card} from '../../ui/Card'
import {Typography} from '../../ui/Typography'

import {ControlledCheckbox} from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox.tsx'
import sC from '@/styles/formStyles.module.scss'
import {useLoginMutation} from "@/services/auth.ts"
import {ControlledTextField} from "@/components/ui/controlled/controlled-text-field"
import {useEffect} from "react"

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.input<typeof schema>

export const SignInForm = () => {
  const [login, {error}] = useLoginMutation()

  const {
    // register,
    handleSubmit,
    control,
    formState: {errors},
    setError
  } = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    if(!error) return
      if ('status' in error &&
        typeof error.data === 'object' &&
        error.data &&
        'message' in error.data
      ) {
        console.log('ERROR', error)
        setError('password', {
          type: 'custom',
          message: error.data.message as string,
        })
      }
  }, [error])

  const handleFormSubmitted = handleSubmit(login)

  return (
    <form onSubmit={handleFormSubmitted}>
      <div className={sC.outerContainer}>
        <Card className={sC.card}>
          <DevTool control={control}/>
          <Typography variant={'H1'} className={sC.center}>
            Sign In
          </Typography>
          <div className={sC.values}>
            <div className={sC.element}>
              <ControlledTextField
                name={'email'}
                errorMessage={errors.email?.message}
                label={'email'}
                control={control}
              />
            </div>
            <div className={sC.element}>
              <ControlledTextField
                name={'password'}
                label={'Password'}
                type={'password'}
                errorMessage={errors.password?.message}
                control={control}
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