import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'

import { ControlledCheckbox } from '@/src/components/ui/controlled/controlled-checkbox/controlled-checkbox.tsx'
import { Textfield } from '@/src/components/ui/Textfield'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.input<typeof schema>

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '123',
      password: '1234',
      rememberMe: true,
    },
  })

  console.log(errors)

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <Textfield {...register('email')} errorMessage={errors.email?.message} label={'email'} />
      <Textfield {...register('password')} label={'password'} />
      <ControlledCheckbox name={'rememberMe'} control={control} label={'remember me'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
