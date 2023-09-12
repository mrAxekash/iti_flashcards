import {SignIn} from "@/components/auth/signIn-form"
import {useLoginMutation} from "@/services/auth.ts"

export const SignInPage = () => {
  const [login] = useLoginMutation()

  return <SignIn onSubmit={login}/>
}