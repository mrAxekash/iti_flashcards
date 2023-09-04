import { SignInForm } from '@/components/auth/signIn-form/signIn-form'
import { SignUpForm } from '@/components/auth/signUp-form/signUp-form.tsx'

export function App() {
  return (
    <div>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}