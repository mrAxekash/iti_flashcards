import { CreateNewPassword } from '@/components/auth/create-new-password/create-new-password.tsx'
import { useCreateNewPasswordMutation } from '@/services/auth/auth.service.ts'

export const CreateNewPasswordPage = () => {
  const [createPassword] = useCreateNewPasswordMutation()

  return <CreateNewPassword onSubmit={createPassword} />
}
