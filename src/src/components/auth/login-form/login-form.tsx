import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'

import { Textfield } from '@/src/components/ui/Textfield'

type FormValues = {
  email: string
  password: string
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textfield {...register('email')} label={'email'} />
      <Textfield {...register('password')} label={'password'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
