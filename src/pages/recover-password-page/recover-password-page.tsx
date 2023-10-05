import { Navigate } from 'react-router-dom'

import { RecoverPassword } from '@/components/auth/recover-password/recover-password.tsx'
import { useRecoverPasswordMutation } from '@/services/auth/auth.service.ts'

export const RecoverPasswordPage = () => {
  const [recoverPassword, { isLoading: isMeLoading, isSuccess }] = useRecoverPasswordMutation()

  if (isMeLoading) return <div>Loading...</div>
  if (isSuccess) return <Navigate to="/check-email" />

  return (
    <div>
      <RecoverPassword onSubmit={recoverPassword} />
    </div>
  )
}
