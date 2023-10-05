import { Navigate } from 'react-router-dom'

import { CheckEmailForm } from '@/components/auth/check-email/Check-email-form.tsx'
import { useCheckEmailMutation } from '@/services/auth/auth.service.ts'

export const CheckEmailPage = () => {
  const [checkEmail, { isSuccess }] = useCheckEmailMutation()

  if (isSuccess) return <Navigate to="/login" />

  return (
    <div>
      <CheckEmailForm />
    </div>
  )
}
