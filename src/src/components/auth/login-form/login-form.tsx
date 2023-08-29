import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { Checkbox } from '../../ui/Checkbox/checkbox'

import { Textfield } from '@/src/components/ui/Textfield'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  console.log(register('email'))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textfield {...register('email')} label={'email'} />
      <Textfield {...register('password')} label={'password'} />
      <Checkbox {...register('rememberMe')} label={'remember me'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
