import { useParams } from 'react-router-dom'

import { CreateNewPassword } from '@/components/auth/create-new-password/create-new-password.tsx'
import { useCreateNewPasswordMutation } from '@/services/auth/auth.service.ts'

export const CreateNewPasswordPage = () => {
  const [createPassword] = useCreateNewPasswordMutation()
  const { token } = useParams()

  console.log(token)

  return <CreateNewPassword onSubmit={createPassword} />
}
