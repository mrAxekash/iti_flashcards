import { RecoverPassword } from '@/components/auth/recover-password/recover-password.tsx'
import { useRecoverPasswordMutation } from '@/services/auth/auth.service.ts'

export const RecoverPasswordPage = () => {
  const [recoverPassword, { isLoading: isMeLoading }] = useRecoverPasswordMutation()

  if (isMeLoading) return <div>Loading...</div>

  return (
    <div>
      <RecoverPassword onSubmit={recoverPassword} />
    </div>
  )
}
