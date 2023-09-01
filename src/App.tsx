import { SignInForm } from './src/components/auth/signIn-form/signIn-form'

import { SignUpForm } from '@/src/components/auth/signUp-form/signUp-form.tsx'

export function App() {
  return (
    <div>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}
