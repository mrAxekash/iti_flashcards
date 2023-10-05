import { CheckEmailForm } from '@/components/auth/check-email/Check-email-form.tsx'

export const CheckEmailPage = () => {
  /*const [checkEmail, { isSuccess }] = useCheckEmailMutation()

  if (isSuccess) return <Navigate to="/login" />*/

  return (
    <div>
      <CheckEmailForm />
    </div>
  )
}
